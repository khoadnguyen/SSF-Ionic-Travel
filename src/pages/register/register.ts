import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

import { User } from "../../shared/models/user";
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }

  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        this.navCtrl.setRoot(HomePage);
      }
    } catch (e) {
      console.error(e);
    }
  }

}
