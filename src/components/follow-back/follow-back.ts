import { Component } from '@angular/core';

/**
 * Generated class for the FollowBackComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'follow-back',
  templateUrl: 'follow-back.html'
})
export class FollowBackComponent {

  text: string;

  constructor() {
    console.log('Hello FollowBackComponent Component');
    this.text = 'Hello World';
  }

}
