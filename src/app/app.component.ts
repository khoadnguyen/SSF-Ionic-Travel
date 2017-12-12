import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProfilePage } from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';
import { Search2Page } from '../pages/search2/search2';
import { MessagePage } from '../pages/message/message';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToProfile(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProfilePage);
  }
  goToSearch(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SearchPage);
  }
  goToSearch2(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Search2Page);
  }
  goToMessage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MessagePage);
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }
  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RegisterPage);
  }
}
