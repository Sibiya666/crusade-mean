import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getAuthToken, isAuth } from 'src/app/utils/auth';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
    public intercept(
        req: HttpRequest<unknown>,
        next: HttpHandler,
    ): Observable<HttpEvent<unknown>> {
        if (isAuth()) {
            req = req.clone({
                setHeaders: {
                    Authorization: getAuthToken(),
                },
            });
        }

        return next.handle(req);
    }
}
