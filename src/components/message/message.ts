import { Component } from '@angular/core';

/**
 * Generated class for the MessageComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'message',
  templateUrl: 'message.html'
})
export class MessageComponent {
  color: string;
  text: string;
  messageDate: string;
  image: string;
  senderName: string;
  senderType: string;
  

  constructor() {
    // console.log('Hello MessageComponent Component');
    this.messageDate = '09 Jun';
    this.senderName = 'Lord Voldemort';
    this.senderType = 'Page';
    this.image = 'https://pbs.twimg.com/profile_images/1728419890/365038411.jpg'
    this.text = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nullam imperdiet justo risus, eget euismod odio euismod ut. 
    Suspendisse tristique mauris malesuada urna varius, in feugiat nulla lobortis. 
    Vivamus faucibus mi et lobortis cursus. Vivamus ut lectus erat. 
    Nulla nec libero sodales, bibendum tortor et, faucibus purus. Aliquam erat volutpat. 
    Sed porta vehicula eros porta varius. Integer fringilla facilisis dolor. 
    Nullam vehicula nunc in bibendum consectetur. Quisque et justo sit amet ex posuere dictum. 
    Etiam eu mi vitae sapien porttitor ultricies. Integer a leo nunc.
    `;
    this.color = 'navy';
  }

}
