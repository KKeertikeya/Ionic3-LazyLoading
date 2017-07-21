import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewConversationButtonComponent } from './view-conversation-button';

import { InboxViewLatestConversationPageModule } from '../../../pages/inbox-view-latest-conversation/inbox-view-latest-conversation.module';

@NgModule({
  declarations: [
    ViewConversationButtonComponent,
  ],
  imports: [
    IonicPageModule.forChild(ViewConversationButtonComponent),
    InboxViewLatestConversationPageModule
  ],
  exports: [
    ViewConversationButtonComponent
  ]
})
export class ViewConversationButtonComponentModule {}
