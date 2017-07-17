import { Component } from '@angular/core';

/**
 * Generated class for the ViewPostAndCommentsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'view-post-and-comments',
  templateUrl: 'view-post-and-comments.html'
})
export class ViewPostAndCommentsComponent {

  text: string;

  constructor() {
    console.log('Hello ViewPostAndCommentsComponent Component');
    this.text = 'Hello World';
  }

}
