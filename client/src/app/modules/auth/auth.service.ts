import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Jwt } from 'src/app/shared/interface/auth';
import { ActionResponseApi } from 'src/app/shared/interface/response';
import { Candidate } from './components/auth-interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    public login(candidate: Candidate): Observable<Jwt> {
        return this.http.post<Jwt>('api/auth/login', candidate).pipe(
            tap((token: Jwt) => {
                localStorage.setItem('jwt', JSON.stringify(token));
            }),
        );
    }

    public registration(candidate: Candidate): Observable<ActionResponseApi> {
        return this.http.post<ActionResponseApi>(
            'api/auth/registration',
            candidate,
        );
    }
}
