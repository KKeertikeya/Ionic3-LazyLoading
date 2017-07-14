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
      title: 'Complete',
      subTitle: '10% of battery remaining',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });

    alert.present();
  }
}
