import {Observable} from 'rxjs';

export abstract class ApiDataPeriod {
  abstract get(entity: string, period: string, nPoints: number): Observable<number[]>;
}
