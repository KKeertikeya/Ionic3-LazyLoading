import { Component, Input } from '@angular/core';

/**
 * Generated class for the ComposerSummaryComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'composer-summary',
  templateUrl: 'composer-summary.html'
})
export class ComposerSummaryComponent {

  @Input() senderName: string;
  @Input() senderType: string;
  // senderName: string;
  // senderType: string;

  constructor() {
    
  }

}
