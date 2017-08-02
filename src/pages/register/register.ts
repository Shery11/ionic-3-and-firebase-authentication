import { Component ,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	@ViewChild('username') uname;
	@ViewChild('password') password;

  constructor(private fire : AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  register(){

  	this.fire.auth.createUserWithEmailAndPassword(this.uname.value,this.password.value)
    .then((data)=>{

    	console.log(data);
       
    }).catch(error =>{
    	console.log(error);
    	 let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: error.message,
          buttons: ['OK']
        });
        alert.present();  
    })
  	console.log(this.uname.value, this.password.value)

  }

}
