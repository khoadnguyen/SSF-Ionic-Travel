import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessagePage } from '../message/message';
import { SearchPage } from '../search/search';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = MessagePage;
  tab2Root: any = SearchPage;
  tab3Root: any = ProfilePage;
  constructor(public navCtrl: NavController) {
  }
  
}
