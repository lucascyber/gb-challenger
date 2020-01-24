import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, public jwt: JwtHelperService) { }

  api = {
    usersLogin: `${environment.api}/users/login`,
    user: `${environment.api}/users`
  };
  // User Login
  signIn(login): Observable<Login> {
    return this._http.post<Login>(this.api.usersLogin, login);
  }
  // User Signup
  signUp(user: User): Observable<User> {
    return this._http.post<User>(this.api.user, user);
  }
  public loginCheck(): boolean {
    const token = localStorage.getItem('accessToken');
    if (token) {
      return !this.jwt.isTokenExpired(token);
    } else {
      return false;
    }

  }
}
