import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionButtonsComponent } from './action-buttons';

import { InboxReplyToPostPageModule } from '../../pages/inbox-reply-to-post/inbox-reply-to-post.module';

// import { PopoverPageModule } from '../../pages/popover/popover.module';

import { InboxViewLatestConversationPageModule } from '../../pages/inbox-view-latest-conversation/inbox-view-latest-conversation.module';

@NgModule({
  declarations: [
    ActionButtonsComponent,
  ],
  imports: [
    IonicPageModule.forChild(ActionButtonsComponent),
    InboxViewLatestConversationPageModule,
    InboxReplyToPostPageModule
  ],
  exports: [
    ActionButtonsComponent
  ]
})
export class ActionButtonsComponentModule {}
