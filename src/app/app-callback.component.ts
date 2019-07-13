import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-app-callback',
  templateUrl: './app-callback.component.html',
  styleUrls: ['./app-callback.component.sass']
})
export class AppCallbackComponent implements OnInit {

  constructor(private location: Location, private http: HttpClient) { }

  ngOnInit() {
  	this.http.post('https://auth.mewtropolis.me/api/auth/callback', {
  		url: location.href
  	});

  	console.log(location.href);
  }
}
