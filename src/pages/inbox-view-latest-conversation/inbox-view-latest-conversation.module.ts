import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxViewLatestConversationPage } from './inbox-view-latest-conversation';

@NgModule({
  declarations: [
    InboxViewLatestConversationPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxViewLatestConversationPage),
  ],
  exports: [
    InboxViewLatestConversationPage
  ]
})
export class InboxViewLatestConversationPageModule {}
