import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../../../../shared/services/facade.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../../../shared/globals/global.service';
import { IUser } from '../../../../interfaces/user';
import { MatTableDataSource } from '@angular/material';
import { UserService } from '../../../../shared/services/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users;

  displayedColumns = ['name', 'userName', 'actions', 'active'];

  breadcrumbs = [
    { link: '/user', title: 'Usuários' }
  ];

  constructor(
    private _facade: FacadeService,
    private _router: Router,
    private _global: GlobalService
  ) { }

  ngOnInit() {
    this.populaUser();
    this.setBreadcrumbs();
  }

  setBreadcrumbs() {
    this._global.breadcrumbs = this.breadcrumbs;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.users.filter = filterValue;
  }

  setFilter() {
    this.users.filterPredicate = (data: IUser, filter: string) => {
      return data.people.name.includes(filter) || data.people.phone.includes(filter);
    };
  }

  populaUser() {
    const subs = this._facade.getUser()
      .subscribe(res => {
        this.users = new MatTableDataSource(res);
        this.setFilter();
        subs.unsubscribe();
      });
  }

  update(id) {
  this._router.navigate(['/user/register'], {queryParams: {id}});
  }

  updateActive(updateUser) {
    this._facade.putActiveUser(updateUser)
    .subscribe(res => {
      this._router.navigateByUrl('/user');
    });
  }

  delete(id) {
    this._facade.deleteUser(id)
      .subscribe(res => {
        this.populaUser();
      });
  }
}
