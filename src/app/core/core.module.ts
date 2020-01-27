import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { PanelGuard } from './guards/panel.guard';
import { LoginGuard } from './guards/login.guard';
import { SignUpGuard } from './guards/signup.guard';
import { ProductsService } from './services/products.service';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { ErrorComponent } from '../shared/components/error/error.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    AuthService,
    LoaderService,
    PanelGuard,
    LoginGuard,
    SignUpGuard,
    ProductsService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class CoreModule { }
