import { ServicesModule } from './shared/services/services.module';
import { AuthGuard } from './shared/auth/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthService } from './shared/auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthModule, HttpsRequestInterceptor } from './shared/auth/auth.module';
import { SidenavModule } from './shared/components/sidenav/sidenav.module';
import { GlobalService } from './shared/globals/global.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidenavModule,
    ServicesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    HttpClient,
    HttpsRequestInterceptor,
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
