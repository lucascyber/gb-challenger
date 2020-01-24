import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    })
  }

  emailValidationHandler() {
    return this.loginForm.get('email').hasError('required') ? 'Este campo é obrigatório' : '';
  }

  passwordValidationHandler() {
    return this.loginForm.get('password').hasError('required') ? 'Este campo é obrigatório' : '';
  }

  signIn() {
    if (this.loginForm.valid) {
      this.authService.signIn(this.loginForm.value).subscribe(
        user => {
          if (user) {
            localStorage.setItem('accessToken', user.accessToken);
            this.router.navigate(['meu-oboticario'])
          }
        })
    }
  }

}
