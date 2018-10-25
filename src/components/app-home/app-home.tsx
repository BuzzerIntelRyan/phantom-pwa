import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-content padding>

        <ion-grid>
	  <ion-row><ion-col>
	    <center>
              <img src="assets/icon/PPLogo.png" alt="logo"></img>
	    </center>
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
