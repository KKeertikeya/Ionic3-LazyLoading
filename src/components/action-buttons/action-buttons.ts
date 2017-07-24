import { Component, Input } from '@angular/core';

import { MessageDataInterface } from '../../data/messageData.interface';

@Component({
  selector: 'action-buttons',
  templateUrl: 'action-buttons.html'
})
export class ActionButtonsComponent {

  @Input() message: MessageDataInterface;

  constructor() {
    
  }

}
