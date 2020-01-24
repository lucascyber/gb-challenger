import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashbackComponent } from './cashback/cashback.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PanelTemplateComponent } from './panel-template/panel-template.component';


const routes: Routes = [
  { path: '', redirectTo: 'meu-oboticario', pathMatch: 'full' },
  {
    path: 'meu-oboticario', component: PanelTemplateComponent, children: [
      { path: '', redirectTo: 'meus-cashbacks', pathMatch: 'full' },
      { path: 'meus-cashbacks', component: CashbackComponent },
      { path: 'produtos', component: ProdutosComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
