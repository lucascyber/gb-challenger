import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { GenericValidator } from 'src/app/shared/common/generict-validator';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  signUpForm: FormGroup;
  sucessSignUp: boolean = false;
  passwordPattern = /[!@#$%^&*(),.?":{}|<>0-9]/g;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit() {
    this.signUpForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      cpf: this.fb.control('', [Validators.required, GenericValidator.isValidCpf()]),
      password: this.fb.control('', [Validators.required, Validators.pattern(this.passwordPattern)]),
    });
  }

  nameValidationHandler() {
    return this.signUpForm.get('name').hasError('required') ? 'Este campo é obrigatório' : '';
  }

  emailValidationHandler() {
    return this.signUpForm.get('email').hasError('required') ? 'Este campo é obrigatório' :
      this.signUpForm.get('email').hasError('pattern') ? 'Digite um e-mail válido' : '';
  }

  passwordValidationHandler() {
    return this.signUpForm.get('password').hasError('required') ? 'Este campo é obrigatório' :
      this.signUpForm.get('password').hasError('minlength') ? 'Tamanho mínimo é de 8 caracteres' :
        this.signUpForm.get('password').hasError('pattern') ? 'Deve conter números ou caracteres especiais' : '';
  }

  cpfValidationHandler() {
    return this.signUpForm.get('cpf').hasError('required') ? 'Este campo é obrigatório' :
      this.signUpForm.get('cpf').hasError('cpfNotValid') ? 'CPF não é válido' : '';
  }

  signUp() {
    if (this.signUpForm.valid) {
      this.authService.signUp(this.signUpForm.value).subscribe(
        user => {
          if (user) {
            this.sucessSignUp = true;
          }
        });
    }
  }

}
