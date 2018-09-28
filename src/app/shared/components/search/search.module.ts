import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatIconModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [SearchComponent],
  declarations: [SearchComponent]
})
export class SearchModule { }
