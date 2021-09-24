import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNjMyNDI0Nzk1LCJleHAiOjE2MzMwMjk1OTV9._4Qbx_78JMdrR12rPNv0HHhhQ_6Hq_6b3tAxn-KrLe95kXcAQEDCCXw4FiZmdtiYcesOHCtvEdG6FUvbE28aGg';
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next.handle(modifiedReq);
  }
}
