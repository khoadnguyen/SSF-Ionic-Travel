import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

import { User } from "../../shared/models/user";
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {} as User;
  formError: string;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore, public user$: UserProvider) { }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }

  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }

/*
  doLogin(user: User) {
    console.log("Login button clicked!", this.user);
    if (!this.user) {
      this.user$.login(user);
    } else {
      this.formError = "Please enter login credentials.";
    }
  }
*/

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        console.log(result.uid)
        this.user$.userId = result.uid;
        this.afs.collection("users").doc(result.uid).update({
            lastLogin: result.metadata.lastSignInTime
        })
        .then(function() {
            console.log("Document successfully accessed!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        // this.navCtrl.setRoot(HomePage);
      }
    }
    catch (e) {
      let serverMessage = e.message;
      this.formError = serverMessage.substr(serverMessage.indexOf(":") + 1);
    }
  }

}
