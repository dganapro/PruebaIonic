import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'mis-asignatura',
    loadChildren: () => import('./mis-asignatura/mis-asignatura.module').then( m => m.MisAsignaturaPageModule)
  },
  {
    path: 'mis-asis',
    loadChildren: () => import('./mis-asis/mis-asis.module').then( m => m.MisAsisPageModule)
  },
  {
    path: 'reg-asis',
    loadChildren: () => import('./reg-asis/reg-asis.module').then( m => m.RegAsisPageModule)
  },
  {
    path: 'cambiar-cla',
    loadChildren: () => import('./cambiar-cla/cambiar-cla.module').then( m => m.CambiarClaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
