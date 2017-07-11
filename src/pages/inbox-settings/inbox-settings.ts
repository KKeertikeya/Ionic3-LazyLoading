import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import inboxSettingsData from '../../data/inbox-settings-data';

@IonicPage()
@Component({
  selector: 'page-inbox-settings',
  templateUrl: 'inbox-settings.html',
})
export class InboxSettingsPage {

  logos: string[];
  profileOwners: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.profileOwners = inboxSettingsData.owners;

    // console.log("In constructor: " + this.profileOwners[0].profiles[0].profileName);

    this.populateLogosArray();
    
  };
  
  populateLogosArray() {
    var i: number;
    for (i = 0; i < this.profileOwners.length; i++) {
      this.logos[i] = "logo-".concat(this.profileOwners[i].profiles[0].platform.toString());
      // console.log(this.profileOwners[i].profiles[i].platfrom);
      // console.log("In constructor: " + this.profileOwners[i].profiles[0].platform);
    }
  }

}
