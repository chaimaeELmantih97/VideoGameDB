import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'f66b6e5534msh74cc5165a7e0950p1aab19jsn9f49f6100bae',
        'x-rapidapi-host':
          'rawg-video-games-database.p.rapidapi.com?key=e52b8608c8ac489aa1aee4bd4fe69279',
      },
      setParams: {
        key: 'e52b8608c8ac489aa1aee4bd4fe69279',
      },
    });
    return next.handle(req);
  }
}
