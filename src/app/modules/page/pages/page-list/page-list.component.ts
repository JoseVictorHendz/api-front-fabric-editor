import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../../../../shared/services/facade.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../../../shared/globals/global.service';
import { MatTableDataSource } from '@angular/material';
import { IPage } from '../../../../interfaces/page';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  pages;

  displayedColumns = ['name', 'creationDate', 'actions', 'active'];

  breadcrumbs = [
    { link: '/page', title: 'Gerador de paginás' }
  ];

  constructor(
    private _facade: FacadeService,
    private _router: Router,
    private _global: GlobalService
  ) { }

  ngOnInit() {
    this.populaPage();
    this.setBreadcrumbs();
  }

  setBreadcrumbs() {
    this._global.breadcrumbs = this.breadcrumbs;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.pages.filter = filterValue;
  }

  setFilter() {
    this.pages.filterPredicate = (data: IPage, filter: string) => {
      return data.name.includes(filter);
    };
  }

  populaPage() {
    const subs = this._facade.getPage()
      .subscribe(res => {
        this.pages = new MatTableDataSource(res);
        this.setFilter();
        subs.unsubscribe();
      });
  }

  update(id) {
  this._router.navigate(['/page/generation'], {queryParams: {id}});
  }

  updateActive(updatePage) {
    this._facade.putActivePage(updatePage)
    .subscribe(res => {
      this._router.navigateByUrl('/page');
    });
  }

  delete(id) {
    this._facade.deletePage(id)
      .subscribe(res => {
        this.populaPage();
      });
  }
}
