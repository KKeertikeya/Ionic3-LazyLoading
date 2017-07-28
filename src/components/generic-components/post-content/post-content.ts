import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-content',
  templateUrl: 'post-content.html'
})
export class PostContentComponent {

  @Input() text: string;

  constructor() {
    
  }

}
