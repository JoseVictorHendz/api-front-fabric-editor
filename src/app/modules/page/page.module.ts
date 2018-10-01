import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageGenerationComponent } from './pages/page-generation/page-generation.component';
import { PageListComponent } from './pages/page-list/page-list.component';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  declarations: [PageGenerationComponent, PageListComponent]
})
export class PageModule { }
