import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import inboxSettingsData from '../../data/inbox-settings-data';

@IonicPage()
@Component({
  selector: 'page-inbox-settings',
  templateUrl: 'inbox-settings.html',
})
export class InboxSettingsPage {

  logosLength: number;
  logos: string[]= new Array(this.logosLength);
  profileOwners: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.profileOwners = inboxSettingsData.owners;
    this.logosLength = inboxSettingsData.owners.length;
    // console.log("In constructor: " + this.profileOwners[0].profiles[0].profileName);

    this.populateLogosArray();
    
  };
  
  populateLogosArray() {
    var i: number;
    for (i = 0; i < this.profileOwners.length; i++) {

      // console.log("logo-".concat(this.profileOwners[i].profiles[0].platform.toString()));
      this.logos[i] = "logo-".concat(this.profileOwners[i].profiles[0].platform.toString());
    }
  }
}
