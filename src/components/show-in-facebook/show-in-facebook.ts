import { Component } from '@angular/core';

/**
 * Generated class for the ShowInFacebookComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'show-in-facebook',
  templateUrl: 'show-in-facebook.html'
})
export class ShowInFacebookComponent {

  text: string;

  constructor() {
    console.log('Hello ShowInFacebookComponent Component');
    this.text = 'Hello World';
  }

}
