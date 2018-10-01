import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../../../../shared/services/facade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../../shared/globals/global.service';
import { IPage } from '../../../../interfaces/page';

@Component({
  selector: 'app-page-generation',
  templateUrl: './page-generation.component.html',
  styleUrls: ['./page-generation.component.scss']
})
export class PageGenerationComponent implements OnInit {

  isUpdating = false;
  page: IPage = { user: {} };

  breadcrumbs = [
    { link: '/page', title: 'Páginas' },
    { link: '/page/generation', title: 'Gerar páginas' }
  ];

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(
    private _facade: FacadeService,
    private _activatedRouter: ActivatedRoute,
    private _router: Router,
    private _global: GlobalService
  ) { }

  ngOnInit() {
    this.pageVerified();
    this.setBreadcrumbs();
  }

  setBreadcrumbs() {
    this._global.breadcrumbs = this.breadcrumbs;
  }
  pageVerified() {
    this._activatedRouter.queryParams.subscribe((params: any) => {
      if (!params['id']) {
        return false;
      }

      const id = params['id'];
      this.isUpdating = true;
      this._facade.getPageById(id)
        .subscribe(res => this.page = res);
    });
  }

  save() {
    if (this.isUpdating) {
      this.update();
    } else {
      this.create();
    }
  }

  create() {
    this._facade.postPage(this.page)
      .subscribe(res => {
        this._router.navigateByUrl('/page');
      });
  }

   update() {
    this._facade.putPage(this.page)
      .subscribe(res => {
        this._router.navigateByUrl('/page');
      });
  }
}
