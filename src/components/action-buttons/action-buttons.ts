import { Component, Input } from '@angular/core';
import { AlertController, ToastController, ModalController, PopoverController } from 'ionic-angular';

import { MessageDataInterface } from '../../data/messageData.interface';
import { PopoverPage } from '../../pages/popover/popover';

@Component({
  selector: 'action-buttons',
  templateUrl: 'action-buttons.html'
})
export class ActionButtonsComponent {

  @Input() message: MessageDataInterface;

  constructor (public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController) {
  }




  /* 
    Present toast
  */
  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      // position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }



 
  /*
    Complete Item clicked
  */
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
        this.presentToast('Item has been marked as complete.');
        this.message.completed = true;
      }
    });

    alert.present();

  }



  /*
    Send direct message
  */
  sendDirectMessage(platform: string) {}




  /*  */
  sendReply(platform: string, myEvent) {
    // let profileModal = this.modalCtrl.create({ userId: 8675309 });
    // profileModal.present();

    const popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }



  /*  */
  followBack() {}



  /*  */
  viewLatestConversation(conversationID: string) {}



  /*  */
  instagramViewPostAndComments(conversationID: string) {}



  /*  */
  facebookViewPostAndComments(conversationID: string) {}



  /*  */
  retweet() {}



  /*  */
  sendLike(platform: string) {}



  /*  */
  showInFacebook() {}



  /*  */
  facebookShowMore() {}



  /*  */
  facebookViewComments() {}



  /*  */
  youtubeViewComments() {}

}


// @Component({})
// export class Profile {
//   constructor(params: NavParams) {
//     console.log('UserId', params.get('userId'));
//   }
// }