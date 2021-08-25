import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomDataServerSource} from './CustomDataServerSource';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseApi = 'http://localhost:8082/api/';

  constructor(private http: HttpClient) {

  }

  post(entity: string, data: any): Observable<any> {
    return this.http.post<any>(this.baseApi + entity + '/', data);
  };

  get(entity: string): Observable<any> {
    return this.http.get<any>(this.baseApi + entity + '/');
  };

  getWithSize(entity: string, size: number): Observable<any> {
    return this.http.get<any>(this.baseApi + entity + '?size=' + size);
  };

  getWithFilters(entity: string, filters: { param: string, value: string }[]): Observable<any> {
    let first = true;
    const params = filters.reduce((acc, val) => {
      const res = acc + (!first ? '&' : '') + val.param + '=' + val.value;
      first = false;
      return res;
    }, '');
    console.log(params);
    return this.http.get<any>(this.baseApi + entity + '/?' + params);
  };

  getFromId(entity: string, id: number): Observable<any> {
    return this.http.get<any>(this.baseApi + entity + '/' + id);
  };

  patchFromId(entity: string, id: number, data: any): Observable<any> {
    return this.http.patch<any>(this.baseApi + entity + '/' + id, data);
  };

  deleteFromId(entity: string, id: number): Observable<any> {
    return this.http.delete<any>(this.baseApi + entity + '/' + id);
  };

  getCustomDataServerSource(entity: string, settings: any): CustomDataServerSource {
    return new CustomDataServerSource(this.http,
      {
        endPoint: this.baseApi + entity + '/',
        dataKey: `_embedded.` + entity,
        totalKey: 'page.totalElements',
        pagerLimitKey: 'size',
        pagerPageKey: 'page',
        filterFieldKey: '#field#',
        sortFieldKey: 'sort',
      });
  }
}
