import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { SearchPage } from '../search/search';
import { Search2Page } from '../search2/search2';
import { MessagePage } from '../message/message';

import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,  public user$: UserProvider) {
    console.log("User ID: ", user$.userId);
  }

  goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }

  goToSearch(params){
    if (!params) params = {};
    this.navCtrl.push(SearchPage);
  }

  goToSearch2(params){
    if (!params) params = {};
    this.navCtrl.push(Search2Page);
  }

  goToMessage(params){
    if (!params) params = {};
    this.navCtrl.push(MessagePage);
  }

}
