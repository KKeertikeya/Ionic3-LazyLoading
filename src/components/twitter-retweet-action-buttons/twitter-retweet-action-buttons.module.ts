import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwitterRetweetActionButtonsComponent } from './twitter-retweet-action-buttons';

import { ReplyButtonComponentModule } from '../reply-button/reply-button.module';
import { ViewConversationButtonComponentModule } from '../view-conversation-button/view-conversation-button.module';
import { CompleteItemButtonComponentModule } from '../complete-item-button/complete-item-button.module';
import { SendLikeButtonComponentModule } from '../send-like-button/send-like-button.module';
import { RetweetButtonComponentModule } from '../retweet-button/retweet-button.module';

@NgModule({
  declarations: [
    TwitterRetweetActionButtonsComponent,
  ],
  imports: [
    IonicPageModule.forChild(TwitterRetweetActionButtonsComponent),
    ReplyButtonComponentModule,
    ViewConversationButtonComponentModule,
    CompleteItemButtonComponentModule,
    SendLikeButtonComponentModule,
    RetweetButtonComponentModule
  ],
  exports: [
    TwitterRetweetActionButtonsComponent
  ]
})
export class TwitterRetweetActionButtonsComponentModule {}
