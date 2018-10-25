import { Component } from '@stencil/core';

@Component({
  tag: 'app-newuser',
  styleUrl: 'app-newuser.css'
})

export class AppNewUser {

  render() {
    return [

      <ion-header>
        <ion-toolbar color="primary">
	  <ion-buttons slot="start">
	    <ion-back-button defaultHref="/" />
	  </ion-buttons>
	</ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <ion-grid>
          <center>
            <ion-row><ion-col>
              <img src="assets/imgs/PPLogo.png"/>
            </ion-col></ion-row>
  
            <ion-row><ion-col>
              <h1>Under construction</h1>
            </ion-col></ion-row>
          </center>
        </ion-grid>
      </ion-content>
    ];
  }
}
