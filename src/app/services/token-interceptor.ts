import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNyIsImlhdCI6MTYyOTg1MTkyOCwiZXhwIjoxNjMwNDU2NzI4fQ.loUi--ro7Y64387twLmwTLIbqxWgAShmUrHoYMPOd_yceR0tOwxClqIC_KNpca6X-_fL5ushdeMaUKaf2cEVaQ';
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next.handle(modifiedReq);
  }
}
