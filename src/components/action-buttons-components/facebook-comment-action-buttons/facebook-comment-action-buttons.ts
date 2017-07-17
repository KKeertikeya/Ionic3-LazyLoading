import { Component } from '@angular/core';

/**
 * Generated class for the FacebookCommentActionButtonsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'facebook-comment-action-buttons',
  templateUrl: 'facebook-comment-action-buttons.html'
})
export class FacebookCommentActionButtonsComponent {

  text: string;

  constructor() {
    console.log('Hello FacebookCommentActionButtonsComponent Component');
    this.text = 'Hello World';
  }

}
