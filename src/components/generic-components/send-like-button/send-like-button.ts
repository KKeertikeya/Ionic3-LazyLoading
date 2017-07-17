import { Component } from '@angular/core';

/**
 * Generated class for the SendLikeButtonComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'send-like-button',
  templateUrl: 'send-like-button.html'
})
export class SendLikeButtonComponent {

  text: string;

  constructor() {
    console.log('Hello SendLikeButtonComponent Component');
    this.text = 'Hello World';
  }

}
