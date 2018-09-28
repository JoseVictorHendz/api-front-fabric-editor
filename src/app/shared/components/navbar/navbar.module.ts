import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatDividerModule } from '@angular/material';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
    BreadcrumbsModule
  ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent]
})
export class NavbarModule { }
