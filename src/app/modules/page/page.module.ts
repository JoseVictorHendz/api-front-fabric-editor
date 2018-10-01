import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageGenerationComponent } from './pages/page-generation/page-generation.component';
import { PageListComponent } from './pages/page-list/page-list.component';

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
import { FormsModule } from '@angular/forms';
import { DeleteModule } from '../../shared/components/delete/delete.module';
import { SearchModule } from '../../shared/components/search/search.module';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
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
    SearchModule,
  ],
  declarations: [PageGenerationComponent, PageListComponent]
})
export class PageModule { }
