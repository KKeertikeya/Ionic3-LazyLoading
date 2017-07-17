import { Component } from '@angular/core';

/**
 * Generated class for the TwitterDmComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'twitter-dm',
  templateUrl: 'twitter-dm.html'
})
export class TwitterDmComponent {

  text: string;

  constructor() {
    console.log('Hello TwitterDmComponent Component');
    this.text = 'Hello World';
  }

}
