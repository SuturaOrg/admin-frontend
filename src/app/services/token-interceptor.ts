import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjMyNDA1NDcwLCJleHAiOjE2MzMwMTAyNzB9.foFvUSePnyEuBwKuwnB5UXi0GeG1kGCeDPtaS5NSi8D7HpSJS8CkATBgM2UbGq2wB30vdJkDdeO4yXnNzL7xeA';
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next.handle(modifiedReq);
  }
}
