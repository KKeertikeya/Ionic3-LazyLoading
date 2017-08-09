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
  initialProfileState: boolean[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.ownerName = this.navParams.get('ownerName');
    this.profile = this.navParams.get('profile');

    var i: number;
    for (i = 0; i < this.profile.options.length; i++) {
      this.initialProfileState[i] = this.profile.options[i].selected;
    }
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
              var i: number;
              for (i = 0; i < this.profile.options.length; i++) {
                this.profile.options[i].selected = false;
              }
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
    
    let alert = this.alertCtrl.create({
      title: "Confirm",
      subTitle: "Do you want to discard changes?",
      buttons: [
        {
          text: "Yes",
          handler: ()=> {
              var i: number;
              for (i = 0; i < this.profile.options.length; i++) {
                this.profile.options[i].selected = this.initialProfileState[i];
              }

              this.navCtrl.pop();
            }
        },
        {
          text: "No",
          role: "cancel",
          handler: ()=> {
            // handler for cancel button
            // do nothing, just close the alert
          }
        }
      ]
    });

    alert.present();
  }

}
