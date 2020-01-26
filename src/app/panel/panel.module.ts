import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { CashbackComponent } from './cashback/cashback.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PanelGuard } from '../core/guards/panel.guard';
import { HttpClientModule } from '@angular/common/http';
import { PanelTemplateComponent } from './panel-template/panel-template.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CashbackComponent, ProdutosComponent, PanelTemplateComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PanelGuard
  ]
})
export class PanelModule { }
