import { CanLoad, Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class PanelGuard implements CanLoad {
  constructor(private auth: AuthService, public router: Router) { }
  canLoad(route: Route): boolean {
    if (this.auth.loginCheck()) {
      return true;
    } else {
      this.router.navigate(['cadastro/login']);
      return false;
    }
  }
}
