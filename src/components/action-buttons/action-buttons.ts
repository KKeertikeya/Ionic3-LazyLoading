import { Component, Input } from '@angular/core';
import { AlertController, ToastController, ModalController, PopoverController, NavController } from 'ionic-angular';

import { MessageDataInterface } from '../../data/messageData.interface';
import { PopoverPage } from '../../pages/popover/popover';

@Component({
  selector: 'action-buttons',
  templateUrl: 'action-buttons.html'
})
export class ActionButtonsComponent {

  @Input() message: MessageDataInterface;
  _navController: any;

  constructor (public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    public navCtrl: NavController,
    ) {
    
  }




  /* ---------------------Present Toast--------------------- */
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



 
  /* ---------------------Complete selected item--------------------- */
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



  /* ---------------------Send direct message--------------------- */
  sendDirectMessage(platform: string) {}




  /* ---------------------Send reply--------------------- */
  sendReply(platform: string, messageType: string, myEvent) {

    const popover = this.popoverCtrl.create(PopoverPage);

    let ev = {
      target : {
        getBoundingClientRect : () => {
          return {
            position: 'absolute',
            margin: '0 auto',
            transform: 'translateY(-50%)'
          };
        }
      }
    };
    
    popover.present({ev});
  }



  /* ---------------------Follow back--------------------- */
  followBack() {}



  /* ---------------------View latest conversation--------------------- */
  viewLatestConversation(conversationID: string) {
    this.navCtrl.push('InboxViewLatestConversationPage');

  }



  /* --------------------- --------------------- */
  instagramViewPostAndComments(conversationID: string) {}



  /* --------------------- --------------------- */
  facebookViewPostAndComments(conversationID: string) {}



  /* --------------------- --------------------- */
  retweet() {}



  /* --------------------- --------------------- */
  sendLike(platform: string) {}



  /* --------------------- --------------------- */
  showInFacebook() {}



  /* --------------------- --------------------- */
  facebookShowMore() {}



  /* --------------------- --------------------- */
  facebookViewComments() {}



  /* --------------------- --------------------- */
  youtubeViewComments() {}

}
