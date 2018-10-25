import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-login',
  styleUrl: 'app-login.css'
})

export class AppLogin {

  @Prop({ mutable: true }) username: string;
  @Prop({ mutable: true }) password: string;

  handleUsernameValue(event) {
    this.username = event.target.value;
    console.log(this.username);  
  } 

  handlePasswordValue(event) {
    this.password = event.target.value;
    console.log(this.password);  
  } 

  render() {
    return [

      <ion-header>
        <ion-toolbar color="primary">
	  <ion-buttons slot="start">
	    <ion-back-button defaultHref="/" />
	  </ion-buttons>
	</ion-toolbar>
      </ion-header>,
      <ion-content><center>

        <ion-grid>
    	  <div id="container">
	    <ion-row><ion-col>
	      <img src="assets/imgs/PPLogo.png"/>
	    </ion-col></ion-row>
    
            <ion-row><ion-col>
	      <h1>Login</h1>
	    </ion-col></ion-row>
    
            <ion-row><ion-col>
	      <ion-item>
	        <ion-label>Username</ion-label>
		<ion-input value={this.username}
		 onInput={(event) => { this.handleUsernameValue(event) }}
		 type="text"></ion-input>
	      </ion-item>
            </ion-col></ion-row>
            <ion-row><ion-col>
	      <ion-item>
	        <ion-label position="floating">Password</ion-label>
                <ion-input value={this.password} type="password"
		 onInput={(event) => { this.handlePasswordValue(event) }}>
		</ion-input>
	      </ion-item>
            </ion-col></ion-row>
    
            <ion-row><ion-col text-center>
              <ion-button ion-button color="primary">Sign In</ion-button>
            </ion-col></ion-row>
          </div>
	</ion-grid>
      </center></ion-content>
    ];
  }
}
