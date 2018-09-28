import { Injectable, OnInit } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { BaseService } from '../services/base.service';


@Injectable()
export class AuthService implements OnInit {

  isLogged = false;

  constructor(private _baseService: BaseService, private jwtHelper?: JwtHelper) { }

  ngOnInit() {
    this.isLogged = this.isAuthenticated();
  }

  public set token(token: string) {
    localStorage.setItem('token', token);
  }

  public get token() {
    return localStorage.getItem('token');
  }

  public logout() {
    this.isLogged = false;
    localStorage.removeItem('token');
  }

  public login(user) {
    return this._baseService.post('token', user);
  }

  public isAuthenticated(): boolean {
    const isTokenExpired = this.token ? this.jwtHelper.isTokenExpired(this.token) : true;
    this.isLogged = !isTokenExpired;
    return !isTokenExpired;
  }


}
