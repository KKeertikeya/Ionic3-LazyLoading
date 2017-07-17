import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'complete-item-button',
  templateUrl: 'complete-item-button.html'
})
export class CompleteItemButtonComponent {

  text: string;

  constructor(private alertController: AlertController) {

  }

  showCompleteConfirmationAlert() {

    console.log("button clicked");

    let alert = this.alertController.create({
      title: 'Mark as complete?',
      subTitle: 'This item won\'t show in your inbox once marked as complete.' ,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            // console.log('Buy clicked');
          }
        }
      ],
      inputs: [
        {
          type: 'checkbox',
          label: 'Don\'t show this message again',
          value: 'dontShowCompleteInboxItemAlert'
        }
      ]
    });

    alert.present();
  }
}
