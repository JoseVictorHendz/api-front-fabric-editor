import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLoadingComponent } from './button-loading/button-loading.component';
import { MatProgressSpinnerModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [ButtonLoadingComponent],
  declarations: [ButtonLoadingComponent]
})
export class ButtonsModule { }
