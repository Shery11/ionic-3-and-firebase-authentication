import { Component , ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { PostsProvider } from '../../providers/posts/posts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 


	@ViewChild('username') uname;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public postService : PostsProvider) {

  }


  ionViewDidLoad(){
     this.postService.load();
  }


 

   
   signIn(){
    this.navCtrl.push(LoginPage);
   }

   signUp(){
    this.navCtrl.push(RegisterPage);
   }
 

}
