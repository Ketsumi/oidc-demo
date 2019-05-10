import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppStatus404Component } from './app-status404.component';

const routes: Routes = [
	{
		path: 'google',
		resolve: {
			url: 'https://google.com'
		},
		component: AppStatus404Component
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
