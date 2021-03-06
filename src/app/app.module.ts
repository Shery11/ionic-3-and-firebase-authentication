import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstPage } from '../pages/first/first';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { PostsProvider } from '../providers/posts/posts';


const firebaseAuth = {
    apiKey: "AIzaSyDGhwQRDgzXMEypaPOft7ENFQxpcnBpObE",
    authDomain: "jobs-7ad55.firebaseapp.com",
    databaseURL: "https://jobs-7ad55.firebaseio.com",
    projectId: "jobs-7ad55",
    storageBucket: "jobs-7ad55.appspot.com",
    messagingSenderId: "729407863428"
  }

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstPage,
    LoginPage,
    RegisterPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstPage,
    LoginPage,
    RegisterPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostsProvider
  ]
})
export class AppModule {}
