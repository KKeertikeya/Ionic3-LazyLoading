import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'view-conversation-button',
  templateUrl: 'view-conversation-button.html'
})
export class ViewConversationButtonComponent {

  text: string;

  constructor(private alertController: AlertController, private navController: NavController) {
    
  }

  loadLatestConversation() {
    //  This code will load new page for conversation.

    this.navController.push('InboxViewLatestConversationPage');
  }

}
