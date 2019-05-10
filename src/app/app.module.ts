import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppCallbackComponent } from './app-callback/app-callback.component';
import { AppLogoutComponent } from './app-logout/app-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppCallbackComponent,
    AppLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
