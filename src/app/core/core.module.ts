import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { PanelGuard } from './guards/panel.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    AuthService,
    LoaderService,
    PanelGuard,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ]
})
export class CoreModule { }
