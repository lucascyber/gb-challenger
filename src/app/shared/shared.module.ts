import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from './material-module/material-module.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [LoaderComponent, ErrorComponent],
  imports: [
    CommonModule,
    MaterialModuleModule,
    FlexLayoutModule
  ],
  entryComponents: [ErrorComponent],
  exports: [
    MaterialModuleModule,
    FlexLayoutModule,
    LoaderComponent
  ]
})
export class SharedModule { }
