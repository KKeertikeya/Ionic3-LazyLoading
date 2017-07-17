import { Component, Input } from '@angular/core';

/**
 * Generated class for the ComposerDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'composer-detail',
  templateUrl: 'composer-detail.html'
})
export class ComposerDetailComponent {

  @Input() image: string;
  @Input() senderName: string;
  @Input() messageDate: string;

  // messageDate: string;
  // image: string;
  // senderName: string;

  constructor() {
    
  }

}
