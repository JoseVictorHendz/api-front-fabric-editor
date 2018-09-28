import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/modules/home/home.module#HomeModule',
    canActivate: [AuthGuard]
  }, {
    path: 'login',
    loadChildren: 'app/modules/login/login.module#LoginModule'
  }, {
    path: 'user',
    loadChildren: 'app/modules/user/user.module#UserModule',
    canActivate: [AuthGuard]
  }, {
    path: 'page',
    loadChildren: 'app/modules/page/page.module#PageModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
