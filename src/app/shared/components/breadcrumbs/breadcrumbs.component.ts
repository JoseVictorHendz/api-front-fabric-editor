import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../globals/global.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private _global: GlobalService) { }

  ngOnInit() {
  }

}
