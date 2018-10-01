import { BaseService } from './base.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeService } from './facade.service';
import { UserService } from './services/user.service';
import { PageService } from './services/page.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    BaseService,
    FacadeService,

    PageService,
    UserService
  ]
})
export class ServicesModule { }
