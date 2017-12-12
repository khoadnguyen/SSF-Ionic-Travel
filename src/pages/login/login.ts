import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

import { User } from "../../shared/models/user";
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }

  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        console.log(result)
        //this.navCtrl.setRoot(HomePage);
      }
    }
    catch (e) {
      console.error(e);
    }
  }

}
