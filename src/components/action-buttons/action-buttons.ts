import { Component, Input } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { MessageDataInterface } from '../../data/messageData.interface';

@Component({
  selector: 'action-buttons',
  templateUrl: 'action-buttons.html'
})
export class ActionButtonsComponent {

  @Input() message: MessageDataInterface;

  constructor(public alertCtrl: AlertController) {
    
  }

  showCompleteItemAlert () {
    let alert = this.alertCtrl.create({
      title: 'Mark as complete?',
      subTitle: 'This item will be hidden from your Inbox. You can change this in Inbox Settings.',
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Don\'t show this message again',
      value: 'dont show complete alert',
      checked: false
    });

    alert.addButton('Cancel');

    alert.addButton({
      text: 'Ok',
      handler: (data: string) => {
        console.log('Checkbox data:', data);
      }
    });

    alert.present();

  }

}
