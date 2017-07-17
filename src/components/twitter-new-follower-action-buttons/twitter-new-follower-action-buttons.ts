import { Component } from '@angular/core';

/**
 * Generated class for the TwitterNewFollowerActionButtonsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'twitter-new-follower-action-buttons',
  templateUrl: 'twitter-new-follower-action-buttons.html'
})
export class TwitterNewFollowerActionButtonsComponent {

  text: string;

  constructor() {
    console.log('Hello TwitterNewFollowerActionButtonsComponent Component');
    this.text = 'Hello World';
  }

}
