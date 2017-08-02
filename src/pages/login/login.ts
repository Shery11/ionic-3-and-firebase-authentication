import { Component , ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 
	@ViewChild('username') uname;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

   
   signIn(){
   	console.log(this.uname.value,this.password.value);
   	 let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
