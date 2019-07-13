import { Component, OnInit } from '@angular/core';
import { Auth } from '../config/authentication.js';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.sass']
})
export class AppLoginComponent implements OnInit {
  private googleUrl: string;

  constructor() {
    // this.googleUrl = this.generateUrl('https://accounts.google.com/o/oauth2/v2/auth?', Auth.google);
    this.googleUrl = 'https://auth.mewtropolis.me/api/auth/google';
  }

  ngOnInit() {
  }

  public googleLogin(): void {
    console.log(this.googleUrl);
    
    window.open(this.googleUrl, '_self');
  }

  public secure(params: any): object {
    const credentials = {
      client_id: params.client_id,
      redirect_uri: params.redirect_uri,
      response_type: params.response_type,
      scope: params.scope,
      nonce: this.randomCode(),
      state: this.randomCode()
    };

    return credentials;
  }

  public randomCode(): string {
    const code = 
      `${Math.floor(Math.random()*10000+1000)}-` +
      `${Math.floor(Math.random()*10000+1000)}-` +
      `${Math.floor(Math.random()*10000+1000)}`;

    return code;
  }

  public generateUrl(issuer: string, params: object): string {
    const securedParams = this.secure(params);
    const queryParams = Object
      .entries(securedParams)
      .map(([k, v]) => `${k}=${v}`)
      .join('&');

    const url = issuer + queryParams.replace(/ /g, '%20');

    return url;
  }

}
