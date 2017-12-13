import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

import { User } from "../../shared/models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {} as User;
  formError: string;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore) {
  }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }

  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        // console.log(result)
        this.afs.collection("users").doc(result.uid).update({
            lastLogin: result.metadata.lastSignInTime
        })
        .then(function() {
            console.log("Document successfully accessed!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        this.navCtrl.setRoot(HomePage);
      }
    }
    catch (e) {
      let serverMessage = e.message;
      this.formError = serverMessage.substr(serverMessage.indexOf(":") + 1);
    }
  }

}
