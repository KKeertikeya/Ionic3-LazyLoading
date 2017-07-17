import { Component } from '@angular/core';

/**
 * Generated class for the TwitterRetweetActionButtonsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'twitter-retweet-action-buttons',
  templateUrl: 'twitter-retweet-action-buttons.html'
})
export class TwitterRetweetActionButtonsComponent {

  text: string;

  constructor() {
    console.log('Hello TwitterRetweetActionButtonsComponent Component');
    this.text = 'Hello World';
  }

}
