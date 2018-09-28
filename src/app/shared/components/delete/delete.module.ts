import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { DeleteComponent } from './delete/delete.component';
import { MatDialogModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [DeleteDialogComponent],
  declarations: [DeleteDialogComponent, DeleteComponent],
  entryComponents: [DeleteComponent]
})
export class DeleteModule { }
