import { Component } from '@angular/core';

/**
 * Generated class for the TwitterDmActionButtonsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'twitter-dm-action-buttons',
  templateUrl: 'twitter-dm-action-buttons.html'
})
export class TwitterDmActionButtonsComponent {

  text: string;

  constructor() {
    console.log('Hello TwitterDmActionButtonsComponent Component');
    this.text = 'Hello World';
  }

}
