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
  MatCheckboxModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,

 } from '../../../../node_modules/@angular/material';
import { FormsModule } from '@angular/forms';
import { DeleteModule } from '../../shared/components/delete/delete.module';
import { SearchModule } from '../../shared/components/search/search.module';
import { ExemploComponent } from './pages/exemplo/exemplo.component';
import { ColorPickerModule } from 'ngx-color-picker';
import {} from '@angular/material/sidenav';
import { NgDragDropModule } from 'ng-drag-drop';

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
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    DeleteModule,
    SearchModule,
    FormsModule,
    ColorPickerModule,
    NgDragDropModule
  ],
  declarations: [PageGenerationComponent, PageListComponent, ExemploComponent],
})
export class PageModule { }
