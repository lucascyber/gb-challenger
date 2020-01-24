import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { CashbackComponent } from './cashback/cashback.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PanelGuard } from '../core/guards/panel.guard';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CashbackComponent, ProdutosComponent],
  imports: [
    CommonModule,
    PanelRoutingModule
  ],
  providers: [
    PanelGuard
  ]
})
export class PanelModule { }
