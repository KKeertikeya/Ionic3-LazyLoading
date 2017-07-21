import { Component } from '@angular/core';

/**
 * Generated class for the ActionButtonsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'action-buttons',
  templateUrl: 'action-buttons.html'
})
export class ActionButtonsComponent {

  text: string;

  constructor() {
    console.log('Hello ActionButtonsComponent Component');
    this.text = 'Hello World';
  }

}
