import { Component } from '@angular/core';

/**
 * Generated class for the RetweetButtonComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'retweet-button',
  templateUrl: 'retweet-button.html'
})
export class RetweetButtonComponent {

  text: string;

  constructor() {
    console.log('Hello RetweetButtonComponent Component');
    this.text = 'Hello World';
  }

}
