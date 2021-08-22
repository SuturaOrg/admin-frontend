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
    const subject = new Subject<number[]>();
    this.apiService.get(entity).subscribe(
      (res) => {
        const end = new Date();
        const start = new Date();
        start.setDate(start.getDate() - 7);
        const startTime = start.getTime();
        const endTime = end.getTime();
        const offset = (endTime - startTime) / nPoints;

        console.log(start);
        const dates = [];
        res._embedded[entity].map(item => {
          const itemDate = Date.parse(item.createdAt);
          if (itemDate > startTime && itemDate < endTime) {
            dates.push(itemDate);
          }
        });
        const finalMap = dates.map(i => {
          return Math.floor((i - startTime) / offset);
        });
        console.log(dates);
        console.log(finalMap);
        const result = [];
        const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
        for (let i = 0; i < nPoints; i++) {
          result.push(countOccurrences(finalMap, i));
        }


        /*   const result = [184, 267, 326, 366, 389, 399,
             392, 371, 340, 304, 265, 227,
             191, 158, 130, 108, 95, 91, 97,
             109, 125, 144, 166, 189, 212,
             236, 259, 280, 300, 316, 329,
             338, 342, 339, 329, 312, 288,
             258, 221, 178, 128, 71,
           ];*/
        /* for (let i = 0; i < nPoints; i++) {
           result.push(4);
         }*/
        console.log(result);
        subject.next(result);
        subject.complete();
      }, null
    );
    return subject.asObservable();
  }
}
