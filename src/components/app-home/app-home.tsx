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
              <img src="assets/imgs/PPLogo.png" alt="logo"/>
	    </center>
          </ion-col></ion-row>

	  <ion-row><ion-col text-center>
	    <ion-button ion-button href="/login">
	      Existing User Sign In</ion-button>
          </ion-col></ion-row>
          <ion-row><ion-col text-center>
            <ion-button ion-button href="/newuser">
	      Create New User</ion-button>
          </ion-col></ion-row>
        </ion-grid>

        {/*<ion-button href="/profile/ionic" expand="block">
         Profile page</ion-button>*/}
      </ion-content>
    ];
  }
}
