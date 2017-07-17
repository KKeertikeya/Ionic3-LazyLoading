import { Component } from '@angular/core';

/**
 * Generated class for the FacebookMessageActionButtonsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'facebook-message-action-buttons',
  templateUrl: 'facebook-message-action-buttons.html'
})
export class FacebookMessageActionButtonsComponent {

  text: string;

  constructor() {
    console.log('Hello FacebookMessageActionButtonsComponent Component');
    this.text = 'Hello World';
  }

}
