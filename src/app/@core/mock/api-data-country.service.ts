import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable, Subject} from 'rxjs';
import {ApiService} from '../../services/api.service';
import {ApiDataCountry} from '../data/api-data-country';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiDataCountryService extends ApiDataCountry {

  constructor(private http: HttpClient, private apiService: ApiService) {
    super();
  }

  get(categories: string[], country: string): Observable<number[]> {
    console.log(country, categories);
    const observables: Observable<number>[] = categories.map((category, index) => {
      return this.apiService.getWithFilters(category.toLowerCase(),
        [{
          param: !['students', 'admins'].includes(category.toLowerCase())
            ? 'studentPrime.country'
            : 'country',
          value: country,
        },
          {param: 'size', value: '500'}]).pipe(
        map((res) => res.page.totalElements)
      );
    });
    const result = categories.map(i => 0);
    return new Observable(subscriber => {

      forkJoin(observables).subscribe((res) => {
          res.map((val, index) => {
            result[index] = val;
          });
          subscriber.next(result);
          subscriber.complete();
        }, error => {
          subscriber.error(error);
        },
        () => {
          subscriber.complete();
        }
      );
    });
  }
}
