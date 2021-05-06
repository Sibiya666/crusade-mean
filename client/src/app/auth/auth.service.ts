import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from './components/auth-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public login(loginUser: LoginUser): Observable<any> {
    return this.http.post<LoginUser>('api/auth/login', loginUser);
  }
}
