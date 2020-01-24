import { CanLoad, Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class SignUpGuard implements CanLoad {
  constructor(private auth: AuthService, public router: Router) { }
  canLoad(route: Route): boolean {
    if (this.auth.loginCheck()) {
      this.router.navigate(['meu-oboticario']);
    }
    return true;
  }
}
