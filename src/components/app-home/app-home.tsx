import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>

        <ion-grid>
	  <ion-row><ion-col>
            {/*<p><img src={require("assets/icon/PPLogo.png")}></img></p>*/}
          </ion-col></ion-row>

	  <ion-row><ion-col text-center>
	    <button ion-button color="primary">
	      Existing User Sign In</button>
          </ion-col></ion-row>
          <ion-row><ion-col text-center>
            <button ion-button color="primary">
	      Create New User</button>
          </ion-col></ion-row>
        </ion-grid>

        <ion-button href="/profile/ionic" expand="block">Profile page</ion-button>
      </ion-content>
    ];
  }
}
