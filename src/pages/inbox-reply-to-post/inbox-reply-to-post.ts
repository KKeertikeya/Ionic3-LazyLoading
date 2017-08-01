import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { MessageDataInterface } from '../../data/messageData.interface';

@IonicPage()
@Component({
  selector: 'page-inbox-reply-to-post',
  templateUrl: 'inbox-reply-to-post.html',
})
export class InboxReplyToPostPage {

  public message: MessageDataInterface;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    
    this.message = this.navParams.get('msg');
  }


  dismissModal() {
    this.viewCtrl.dismiss();
  }
}
