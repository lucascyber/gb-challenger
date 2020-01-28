import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule, Router, Routes } from '@angular/router';

// Teste de autenticação do usuário
describe('Add User', () => {
  const user = {
    name: 'Teste User',
    email: 'testeuser@email.com',
    password: 'teste1234',
    cpf: '950.522.230-05',
  };

  function tokenGetter() {
    return localStorage.getItem('accessToken');
  }

  const routes: Routes = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterModule.forRoot(routes),
        JwtModule.forRoot({
          config: {
            tokenGetter: tokenGetter
          }
        }),
      ],
      providers: [
        AuthService
      ],

    });
  });

  it('Usuário novo usuário deve ser criado', inject([AuthService], (service: AuthService) => {
    service.signUp(user).subscribe(user => {
      expect(user).toBeDefined();
    });
  }));

  it('Usuário novo deve estar logado', inject([AuthService], (service: AuthService) => {
    let login = { email: 'testeuser@email.com', password: 'teste1234' };
    service.signIn(login).subscribe(user => {
      expect(user).toBeDefined();
    });
  }));

});
