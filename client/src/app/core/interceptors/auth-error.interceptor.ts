import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError, timer } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { DynamicComponentService } from 'src/app/shared/services/dynamic-component/dynamic-component.service';
import { ErrorNotificationComponent } from 'src/app/shared/components/error-notification/error-notification.component';

@Injectable()
export class AuthErrorInterceptor implements HttpInterceptor {
    constructor(private dynamicComponentService: DynamicComponentService) {}

    public intercept(
        req: HttpRequest<unknown>,
        next: HttpHandler,
    ): Observable<HttpEvent<unknown>> {
        return next.handle(req).pipe(
            catchError((response: HttpErrorResponse) => {
                this.dynamicComponentService.open<ErrorNotificationComponent>(
                    ErrorNotificationComponent,
                    {
                        errorMsg: response.error.msg,
                        isVisible: true,
                        isTop: true
                    },
                );

                timer(1000).pipe(
                    tap(() => this.dynamicComponentService.close())
                ).subscribe();

                return throwError(response);
            }),
        );
    }
}
