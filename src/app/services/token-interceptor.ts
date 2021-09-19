import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjMxOTgxMDk0LCJleHAiOjE2MzI1ODU4OTR9.3ycP1WP_lzouT0hw2AXlsBFpm7wDVtyiTFzcahSAmGwv5WqpYB6Q4SoSkmwmjZkhtehiFl5ZeoeymppYXE6eWg';
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next.handle(modifiedReq);
  }
}
