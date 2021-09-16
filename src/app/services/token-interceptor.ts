import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNjMxNzI2NTE0LCJleHAiOjE2MzIzMzEzMTR9.ObII61qD7d9QOmhuAXPiG_kQoCFpOfhwiSjWY832uwCLZMQcXCFtBp_c1M7nvaB5FQeAy7LSRpgGByPXh9zplQ';
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next.handle(modifiedReq);
  }
}
