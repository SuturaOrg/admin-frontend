import {Injectable} from '@angular/core';
import {ApiDataPeriod} from '../data/api-data-period';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {ApiService} from '../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiDataPeriodService extends ApiDataPeriod {

  constructor(private http: HttpClient, private apiService: ApiService) {
    super();
  }

  get(entity: string, period: string, nPoints: number): Observable<number[]> {
    let dateOffset;
    switch (period) {
      case 'week':
        dateOffset = 7;
        break;
      case 'month':
        dateOffset = 365;
        break;
      case 'year':
        dateOffset = 365*7;
        break;

    }
    return new Observable(subscriber => {
      this.apiService.getWithSize(entity, 500).subscribe(
        (res) => {
          const end = new Date();
          const start = new Date();
          start.setDate(start.getDate() - dateOffset);
          const startTime = start.getTime();
          const endTime = end.getTime();
          const offset = (endTime - startTime) / nPoints;

          const dates = [];
          //between start and end
          res._embedded[entity].map(item => {
            const itemDate = Date.parse(item.createdAt)-60*60*10000;
            if (itemDate > startTime && itemDate < endTime) {
              dates.push(itemDate);
            }
          });
          //array of rank compared to offset from 0 to nPoints
          const finalMap = dates.map(i => {
            return Math.floor((i - startTime) / offset);
          });
          const result = [];
          const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
          for (let i = 0; i < nPoints; i++) {
            result.push(countOccurrences(finalMap, i));
          }
          subscriber.next(result);
          subscriber.complete();
        }, null
      );
    });
  }
}
