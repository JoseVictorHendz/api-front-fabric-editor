import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../shared/globals/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  breadcrumbs = [];

  constructor(private _global: GlobalService) { }

  ngOnInit() {
    this.setBreadcrumbs();
  }

  setBreadcrumbs() {
    this._global.breadcrumbs = this.breadcrumbs;
  }

}
