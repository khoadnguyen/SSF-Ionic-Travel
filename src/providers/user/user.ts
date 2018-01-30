import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';

import {User} from '../../shared/models/user';
import {HomePage} from '../../pages/home/home';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  user = {} as User;
  formError: string;
  userId;

  constructor(public http: HttpClient, private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    console.log('Hello UserProvider Provider');
  }

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        console.log("Login service reached, ", result)
        this.afs.collection("users").doc(result.uid).update({
          lastLogin: result.metadata.lastSignInTime
        })
          .then(function() {
            console.log("Document successfully accessed!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
      }
    }
    catch (e) {
      let serverMessage = e.message;
      this.formError = serverMessage.substr(serverMessage.indexOf(":") + 1);
    }
  }


}
