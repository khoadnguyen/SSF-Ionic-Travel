import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Items } from '../../shared/models/fsitems';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the FirestoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreProvider {

  itemsCollection: AngularFirestoreCollection<Items>; //Firestore collection

  constructor(public http: HttpClient, private afs: AngularFirestore) {
    console.log('Hello Firestore Provider');
  }

  getItems() {
    return this.itemsCollection;
  }

}
