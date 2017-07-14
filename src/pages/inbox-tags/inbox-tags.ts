import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.tagData = filterData.tags;

    console.log(this.tagData);
  }


  presentPrompt() {

    let alert = this.alertCtrl.create({
      title: 'Add tag',
      inputs: [
        {
          name: 'newTagName',
          placeholder: 'Tag Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            
          }
        }
      ]
    });
    alert.present(); 
  }

}
