import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  
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

}
