import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {NbAuthJWTToken, NbAuthService} from '@nebular/auth';
import {ApiService} from './api.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  token: NbAuthJWTToken;

  constructor(private authService: NbAuthService) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.token = token;
        }
      });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${this.token}`),
    });
    return next.handle(modifiedReq);
  }
}
