import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-inbox-settings-individual-profiles',
  templateUrl: 'inbox-settings-individual-profiles.html',
})
export class InboxSettingsIndividualProfilesPage {
  addProfile: boolean = true;
  ownerName: string;
  profile: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.ownerName = this.navParams.get('ownerName');
    this.profile = this.navParams.get('profile');
  }

  ionViewDidLoad() {
  }

  toggleAddProfile() {

    if (!this.addProfile) {
      // i.e. if profile is being removed
      // show alert message

      let alert = this.alertCtrl.create({
        title: 'Confirm',
        subTitle: 'Are you sure you want to hide this profile from your inbox? Data related to this profile won\'t be shown.',
        buttons: [
          {
            text: 'Confirm',
            handler: ()=> {
              // add code for confirm handler here
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: ()=> {
              // add code for cancel handler here
              this.addProfile = true;
            }
          }
        ]
      });

      alert.present();
    }
  }

  saveIndividualSettings() {

  }

  cancelIndividualSettings() {
    this.navCtrl.pop();
  }

}
