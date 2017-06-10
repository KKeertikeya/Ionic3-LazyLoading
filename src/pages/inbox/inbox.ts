import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageComponent } from '../../components/message/message';

@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html'
})


export class InboxPage {
  messages = [MessageComponent, MessageComponent];

  constructor(public navCtrl: NavController) {

  }
}