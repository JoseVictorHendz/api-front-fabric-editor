import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  @Output() deletou = new EventEmitter<any>();

  constructor(private _dialog: MatDialog) { }

  ngOnInit() {
  }

  open() {
    this._dialog.open(DeleteComponent, {
      data: {
        delete: this.delete.bind(this)
      }
    });
  }

  delete() {
    this.deletou.emit();
  }

}
