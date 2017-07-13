import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import filterData from '../../data/filterData';

@IonicPage()
@Component({
  selector: 'page-inbox-tags',
  templateUrl: 'inbox-tags.html',
})
export class InboxTagsPage {

  // Variable declaration
  tagData: any;

  // Constructor
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tagData = filterData.tags;

    console.log(this.tagData);
  }

}
