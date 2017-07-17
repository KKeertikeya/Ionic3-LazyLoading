import { Component, Input } from '@angular/core';

/**
 * Generated class for the PostContentComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'post-content',
  templateUrl: 'post-content.html'
})
export class PostContentComponent {

  @Input() text: string;

  constructor() {
    
  }

}
