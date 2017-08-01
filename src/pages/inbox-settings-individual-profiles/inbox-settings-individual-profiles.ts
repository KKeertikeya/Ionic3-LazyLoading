import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-inbox-settings-individual-profiles',
  templateUrl: 'inbox-settings-individual-profiles.html',
})
export class InboxSettingsIndividualProfilesPage {

  ownerName: string;
  profile: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ownerName = this.navParams.get('ownerName');
    this.profile = this.navParams.get('profile');
  }

  ionViewDidLoad() {
  }

}
