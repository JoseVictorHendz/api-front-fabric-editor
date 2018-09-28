import { BaseService } from './base.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeService } from './facade.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    BaseService,
    FacadeService,

    UserService
  ]
})
export class ServicesModule { }
