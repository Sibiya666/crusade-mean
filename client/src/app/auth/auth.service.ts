import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionResponseApi } from '../shared/interface';
import { Candidate, Jwt } from './components/auth-interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    public login(candidate: Candidate): Observable<Jwt | ActionResponseApi> {
        return this.http.post<Jwt | ActionResponseApi>('api/auth/login', candidate);
    }

    public registration(candidate: Candidate): Observable<ActionResponseApi> {
        return this.http.post<ActionResponseApi>(
            'api/auth/registration',
            candidate,
        );
    }
}
