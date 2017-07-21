import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import conversations from '../../data/conversation-data';

@IonicPage()
@Component({
  selector: 'page-inbox-view-latest-conversation',
  templateUrl: 'inbox-view-latest-conversation.html',
})
export class InboxViewLatestConversationPage {

  public messages: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.messages = conversations.messages;
  }

}
