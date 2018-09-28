import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import {
  MatCardModule,
  MatDividerModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatProgressBarModule,
  MatCheckboxModule
 } from '../../../../node_modules/@angular/material';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { DeleteModule } from '../../shared/components/delete/delete.module';
import { SearchModule } from '../../shared/components/search/search.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    FormsModule,
    DeleteModule,
    SearchModule
  ],
  declarations: [UserListComponent, UserRegisterComponent]
})
export class UserModule { }
