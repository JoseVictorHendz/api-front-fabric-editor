import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() opened;

  constructor(
    public _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this._auth.logout();
    this.redirect('/login');
  }

  redirect(url) {
    this._router.navigateByUrl(url);
  }
}
