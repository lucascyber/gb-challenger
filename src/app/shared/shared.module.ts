import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from './material-module/material-module.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    MaterialModuleModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModuleModule,
    FlexLayoutModule,
    LoaderComponent
  ]
})
export class SharedModule { }
