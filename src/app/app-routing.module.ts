
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelGuard } from './core/guards/panel.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastro',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      import(`./auth/auth.module`).then(m => m.AuthModule),
  },
  {
    path: 'meu-oboticario',
    loadChildren: () =>
      import(`./panel/panel.module`).then(m => m.PanelModule),
    canLoad: [PanelGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
