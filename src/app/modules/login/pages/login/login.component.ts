import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  user = {userName: '', password: '' };
  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.isLoading = true;

    this._auth.login(this.user)
    .subscribe(res => {
      this._auth.token = res.token;
      this._auth.isLogged = true;
      this._router.navigateByUrl('/');
      this.isLoading = false;
    });
  }

}
