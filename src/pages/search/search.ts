import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController } from 'ionic-angular';
import { Search2Page } from '../search2/search2';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }
  goToSearch2(params){
    if (!params) params = {};
    this.navCtrl.push(Search2Page);
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log("Response:", resp);
      console.log("Response:", resp.coords.longitude);
      console.log("Respo  nse:", resp.coords.latitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
