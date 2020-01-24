
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelGuard } from './core/guards/panel.guard';
import { SignUpGuard } from './core/guards/signup.guard';


const routes: Routes = [
  {
    path: 'cadastro',
    loadChildren: () =>
      import(`./auth/auth.module`).then(m => m.AuthModule),
    canLoad: [SignUpGuard],
  },
  {
    path: '',
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
