import {ApiService} from '../../services/api.service';
import {Observable} from 'rxjs';

export abstract class ApiDataPeriod {
  abstract get(entity:string, period:string,nPoints: number): Observable<number[]>;
}
