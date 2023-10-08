import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { GlobalInterceptor } from './global-interceptor.interceptor';
import { LogInterceptor } from './log.interceptor';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: GlobalInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LogInterceptor,
    multi: true,
  },
];
