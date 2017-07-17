import { Component } from '@angular/core';

/**
 * Generated class for the TwitterMentionActionButtonsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'twitter-mention-action-buttons',
  templateUrl: 'twitter-mention-action-buttons.html'
})
export class TwitterMentionActionButtonsComponent {

  text: string;

  constructor() {
    console.log('Hello TwitterMentionActionButtonsComponent Component');
    this.text = 'Hello World';
  }

}
