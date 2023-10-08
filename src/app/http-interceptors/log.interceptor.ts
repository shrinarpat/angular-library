import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { MessageService } from '../services/message/message.service';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  constructor(private _messageService: MessageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const started = Date.now();
    let ok: string;

    // extend server response observable with logging
    return next.handle(request).pipe(
      tap({
        // succeededs when there is a resposne; ignore other events
        next: (event) =>
          (ok = event instanceof HttpResponse ? 'succeeded' : ''),

        // Operation failed; Error is an HttpErrorResponse
        error: (error) => (ok = 'failed'),
      }),
      // Log when response observable either completes or errors
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${request.method} "${request.urlWithParams}"
        ${ok} in ${elapsed} ms.`;
        this._messageService.addLog(msg);
      })
    );
  }
}
