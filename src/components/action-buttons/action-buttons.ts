import { Component, Input } from '@angular/core';

import { MessageDataInterface } from '../../data/messageData.interface';
// import allMessages from '../../data/messageData';

@Component({
  selector: 'action-buttons',
  templateUrl: 'action-buttons.html'
})
export class ActionButtonsComponent {

  @Input() message: MessageDataInterface;

  // messages: MessageDataInterface[];

  constructor() {
    // this.messages = allMessages;
    
  }

}
