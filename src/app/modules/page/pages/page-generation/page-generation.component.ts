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
  ngOnInit() {}
}
