import { Component } from '@angular/core';

/**
 * Generated class for the ViewConversationButtonComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'view-conversation-button',
  templateUrl: 'view-conversation-button.html'
})
export class ViewConversationButtonComponent {

  text: string;

  constructor() {
    console.log('Hello ViewConversationButtonComponent Component');
    this.text = 'Hello World';
  }

}
