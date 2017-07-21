import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxReplyPage } from './inbox-reply';

@NgModule({
  declarations: [
    InboxReplyPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxReplyPage),
  ],
  exports: [
    InboxReplyPage
  ]
})
export class InboxReplyPageModule {}
