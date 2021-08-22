import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjI5NjYwMTg0LCJleHAiOjE2MzAyNjQ5ODR9.ZlLKqb0SEFaTO-DkKZru2NTOM4w1mFaiANpZdBmfcvUfkv5946Mvx7BzVVOVcoFkWl0ILYXCJf4kUF8oMi3rKg';
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next.handle(modifiedReq);
  }
}
