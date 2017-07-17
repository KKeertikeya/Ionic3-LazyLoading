import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacebookCommentActionButtonsComponent } from './facebook-comment-action-buttons';

// Generic components
import { ReplyButtonComponentModule } from '../../generic-components/reply-button/reply-button.module';
import { ViewConversationButtonComponentModule } from '../../generic-components/view-conversation-button/view-conversation-button.module';
import { CompleteItemButtonComponentModule } from '../../generic-components/complete-item-button/complete-item-button.module';
import { SendLikeButtonComponentModule } from '../../generic-components/send-like-button/send-like-button.module';

@NgModule({
  declarations: [
    FacebookCommentActionButtonsComponent,
  ],
  imports: [
    IonicPageModule.forChild(FacebookCommentActionButtonsComponent),
    ReplyButtonComponentModule,
    ViewConversationButtonComponentModule,
    CompleteItemButtonComponentModule,
    SendLikeButtonComponentModule,
  ],
  exports: [
    FacebookCommentActionButtonsComponent
  ]
})
export class FacebookCommentActionButtonsComponentModule {}
