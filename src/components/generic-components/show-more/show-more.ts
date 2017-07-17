import { Component } from '@angular/core';

/**
 * Generated class for the ShowMoreComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'show-more',
  templateUrl: 'show-more.html'
})
export class ShowMoreComponent {

  text: string;

  constructor() {
    console.log('Hello ShowMoreComponent Component');
    this.text = 'Hello World';
  }

}
