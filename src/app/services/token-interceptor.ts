import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYiLCJpYXQiOjE2MzE3OTAzODMsImV4cCI6MTYzMjM5NTE4M30.O0_nvwOvigXWbSxOtAak9a3mDzDf8vTwjZxzFqmXM3N2cbNwmb8cIAs9GAPiZcV576EESyC_diD6i5e7-4PQWA';   const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next.handle(modifiedReq);
  }
}
