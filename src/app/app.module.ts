import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './app-login.component';
import { AppCallbackComponent } from './app-callback.component';
import { AppLogoutComponent } from './app-logout.component';
import { AppStatus404Component } from './app-status404.component';
import { AppHomeComponent } from './app-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppCallbackComponent,
    AppLogoutComponent,
    AppStatus404Component,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
