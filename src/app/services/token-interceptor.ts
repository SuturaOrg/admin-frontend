import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNjMxOTkzMjkyLCJleHAiOjE2MzI1OTgwOTJ9.0B26nRIjzJ-8DuqK9rCZD3qozWYvCPEIskO-2ozqCcYV8QK75_ZP891BaIzHcyPzYen1b5lPN7rMtWvpqvBeuw';
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next.handle(modifiedReq);
  }
}
