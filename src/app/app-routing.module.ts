  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import(`./home/home.module`).then(m => m.HomeModule),
  //   canLoad: [HomeGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }