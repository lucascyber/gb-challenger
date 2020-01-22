import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  api = {
    usersLogin: `${environment.api}/users/login`,
    user: `${environment.api}/users`
  };

  // signIn(): Observable<Login> {
  //   return this._http.get()
  // }

}
