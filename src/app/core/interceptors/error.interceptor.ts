import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { ErrorService } from '../services/error.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _errorService: ErrorService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(catchError(err => {
        if (err instanceof HttpErrorResponse) {
          const loginUrl = 'https://lucasteixeira.io/api/users/login';
          const userUrl = 'https://lucasteixeira.io/api/users';

          if (err.status === 404) {
            this._errorService.openDialog(`Não encontrado`);
          }

          if (err.status === 403 && req.url !== loginUrl) {
            this._errorService.openDialog('Você não tem autorização');
          }

          if (err.status === 403 && req.url === loginUrl) {
            this._errorService.openDialog('E-mail ou senha inválidos');
          }

          if (err.status === 400 && req.url === userUrl) {
            this._errorService.openDialog('Usuário já existente');
          }

          if (err.status === 400 && req.url !== userUrl) {
            this._errorService.openDialog('Dados inválidos');
          }

          if (err.status === 500) {
            this._errorService.openDialog('Ocorreu um erro no sistema');
          }
        }
        return throwError(err.statusText);
      }));
  }
}
