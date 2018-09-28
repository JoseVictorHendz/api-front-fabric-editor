import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule, MatIconModule, MatDividerModule, MatButtonModule, MatListModule } from '@angular/material';
import { NavbarModule } from '../navbar/navbar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule
  ],
  exports: [SidenavComponent],
  declarations: [SidenavComponent]
})
export class SidenavModule { }
