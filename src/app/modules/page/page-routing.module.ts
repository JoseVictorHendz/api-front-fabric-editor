import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageGenerationComponent } from './pages/page-generation/page-generation.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { ExemploComponent } from './pages/exemplo/exemplo.component';


const routes: Routes = [{
  path: '',
  component: PageListComponent
}, {
  path: 'generation',
  component: PageGenerationComponent
}, {
  path: '1',
  component: ExemploComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
