import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwitterDmActionButtonsComponent } from './twitter-dm-action-buttons';

import { ReplyButtonComponentModule } from '../reply-button/reply-button.module';
import { ViewConversationButtonComponentModule } from '../view-conversation-button/view-conversation-button.module';
import { CompleteItemButtonComponentModule } from '../complete-item-button/complete-item-button.module';
import { SendLikeButtonComponentModule } from '../send-like-button/send-like-button.module';

@NgModule({
  declarations: [
    TwitterDmActionButtonsComponent,
  ],
  imports: [
    IonicPageModule.forChild(TwitterDmActionButtonsComponent),
    ReplyButtonComponentModule,
    ViewConversationButtonComponentModule,
    CompleteItemButtonComponentModule,
    SendLikeButtonComponentModule,
  ],
  exports: [
    TwitterDmActionButtonsComponent
  ]
})
export class TwitterDmActionButtonsComponentModule {}
