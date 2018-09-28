import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageGenerationComponent } from './page-generation/page-generation.component';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  declarations: [PageGenerationComponent]
})
export class PageModule { }
