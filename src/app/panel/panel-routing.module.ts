import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashbackComponent } from './cashback/cashback.component';
import { ProdutosComponent } from './produtos/produtos.component';


const routes: Routes = [
  { path: '', redirectTo: 'cashback', pathMatch: 'full' },
  { path: 'cashback', component: CashbackComponent },
  { path: 'produtos', component: ProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
