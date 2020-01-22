import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from './material-module/material-module.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MaterialModuleModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
