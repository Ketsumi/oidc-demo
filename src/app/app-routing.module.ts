import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './app-home.component';
import { AppLoginComponent } from './app-login.component';
import { AppLogoutComponent } from './app-logout.component';
import { AppCallbackComponent } from './app-callback.component';
import { AppStatus404Component } from './app-status404.component';

const routes: Routes = [
	{ path: '', component: AppHomeComponent },
	{ path: 'login', component: AppLoginComponent },
	{ path: 'logout', component: AppLogoutComponent },
	{ path: 'callback', component: AppCallbackComponent },
	{ path: 'status404', component: AppStatus404Component },
	{ path: '**', redirectTo: '/status404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
