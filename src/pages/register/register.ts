import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

import { User } from "../../shared/models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  user = {} as User;
  formError: string;
  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore) {
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
          this.afs.collection("users").doc(result.uid).set({
              displayName: this.user.fname + ' ' + this.user.lname,
              email: this.user.email,
              photoURL: "",
              providerId: "email",
              lastLogin: result.metadata.lastSignInTime,
              created: result.metadata.creationTime
          }, { merge: true })
          .then(function() {
              console.log("Document successfully written!");
          })
          .catch(function(error) {
              console.error("Error writing document: ", error);
          });
          this.navCtrl.setRoot(HomePage);
      }
    } catch (e) {
        let serverMessage = e.message;
        this.formError = serverMessage.substr(serverMessage.indexOf(":") + 1);
    }
  }

}
