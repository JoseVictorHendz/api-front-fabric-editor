import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';

const routes: Routes = [{
  path: '',
  component: UserListComponent
}, {
  path: 'register',
  component: UserRegisterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
