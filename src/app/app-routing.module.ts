import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './app-home.component';
import { AppLoginComponent } from './app-login.component';
import { AppLogoutComponent } from './app-logout.component';
import { AppCallbackComponent } from './app-callback.component';
import { AppStatus404Component } from './app-status404.component';

const routes: Routes = [
	{ path: 'login', component: AppLoginComponent },
	{ path: 'logout', component: AppLogoutComponent },
	{ path: 'callback', component: AppCallbackComponent },
	{ path: '', component: AppHomeComponent, pathMatch: 'full' },
	{ path: '**', component: AppStatus404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
