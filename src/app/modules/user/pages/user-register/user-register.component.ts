import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../../interfaces/user';
import { FacadeService } from '../../../../shared/services/facade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../../shared/globals/global.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  isUpdating = false;

  user: IUser = { people: {} };

  breadcrumbs = [
    { link: '/user', title: 'User' },
    { link: '/user/register', title: 'Register' }
  ];

  constructor(
    private _facade: FacadeService,
    private _activatedRouter: ActivatedRoute,
    private _router: Router,
    private _global: GlobalService
  ) { }

  ngOnInit() {
    this.userVerified();
    this.setBreadcrumbs();
  }

  setBreadcrumbs() {
    this._global.breadcrumbs = this.breadcrumbs;
  }
  userVerified() {
    this._activatedRouter.queryParams.subscribe((params: any) => {
      if (!params['id']) {
        return false;
      }

      const id = params['id'];
      this.isUpdating = true;
      this._facade.getUserById(id)
        .subscribe(res => this.user = res);
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
    this._facade.postUser(this.user)
      .subscribe(res => {
        this._router.navigateByUrl('/user');
      });
  }

   update() {
    this._facade.putUser(this.user)
      .subscribe(res => {
        this._router.navigateByUrl('/user');
      });
  }

}
