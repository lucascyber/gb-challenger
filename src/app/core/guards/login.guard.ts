import { CanLoad, Route, Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    if (this.auth.loginCheck()) {
      this.router.navigate(['meu-oboticario']);
    }
    return true;
  }
}
