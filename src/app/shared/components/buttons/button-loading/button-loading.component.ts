import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-loading',
  templateUrl: './button-loading.component.html',
  styleUrls: ['./button-loading.component.scss']
})
export class ButtonLoadingComponent implements OnInit {

  @Input() class = '';
  @Input() isLoading = false;

  @Output() click = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clickEmitter() {
    this.click.emit();
  }

}
