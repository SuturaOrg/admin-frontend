import {Observable} from 'rxjs';

export abstract class ApiDataCountry {
  abstract get(categories: string[], country: string): Observable<number[]>;
}
