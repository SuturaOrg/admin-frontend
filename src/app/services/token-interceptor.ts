import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMiIsImlhdCI6MTYyOTM5Nzk2OSwiZXhwIjoxNjMwMDAyNzY5fQ.VRUhFm6_3gtwEVPEcy_Yi533kP-texrVwBrCCLY5X9ZAFtfneCgUEfE9cDsqGe0LMAVkAQ7tI2H9Q81UrwsV8w';
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next.handle(modifiedReq);
  }
}
