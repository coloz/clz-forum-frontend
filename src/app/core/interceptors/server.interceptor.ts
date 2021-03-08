import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class ServerInterceptor implements HttpInterceptor {

  constructor(
    private message: NzMessageService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (typeof event.body.access_token != 'undefined') {
            localStorage.setItem('access_token', event.body.access_token)
          } else if (typeof event.body.code != 'undefined') {
            if (event.body.code != 0) {
              if (event.body.code == 5) {
                localStorage.removeItem('access_token');
                this.message.info(event.body.message);
              } else {
                this.message.error(event.body.message);
              }
            }
          }
        }
        return event
      }),
    );
  }
}