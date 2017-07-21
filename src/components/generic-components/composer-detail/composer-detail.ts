import { Component, Input } from '@angular/core';

@Component({
  selector: 'composer-detail',
  templateUrl: 'composer-detail.html'
})
export class ComposerDetailComponent {

  @Input() image: string;
  @Input() senderName: string;
  @Input() messageDate: string;

  constructor() {
    
  }

}
