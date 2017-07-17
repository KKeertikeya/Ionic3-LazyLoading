import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwitterNewFollowerActionButtonsComponent } from './twitter-new-follower-action-buttons';

import { ReplyButtonComponentModule } from '../reply-button/reply-button.module';
import { CompleteItemButtonComponentModule } from '../complete-item-button/complete-item-button.module';
import { RetweetButtonComponentModule } from '../retweet-button/retweet-button.module';
import { TwitterDmComponentModule } from '../twitter-dm/twitter-dm.module';
import { FollowBackComponentModule } from '../follow-back/follow-back.module';

@NgModule({
  declarations: [
    TwitterNewFollowerActionButtonsComponent,
  ],
  imports: [
    IonicPageModule.forChild(TwitterNewFollowerActionButtonsComponent),
    ReplyButtonComponentModule,
    CompleteItemButtonComponentModule,
    RetweetButtonComponentModule,
    TwitterDmComponentModule,
    FollowBackComponentModule
  ],
  exports: [
    TwitterNewFollowerActionButtonsComponent
  ]
})
export class TwitterNewFollowerActionButtonsComponentModule {}
