import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inbox-filters',
  templateUrl: 'inbox-filters.html',
})
export class InboxFiltersPage {

  items = [
    'Facebook Comments',
    'Facebook Messages',
    'Twitter DM',
    'Twitter Comments',
    'Instagram DM',
    'Instagram Comments'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
