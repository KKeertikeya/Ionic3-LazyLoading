import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwitterNewFollowerActionButtonsComponent } from './twitter-new-follower-action-buttons';

import { ReplyButtonComponentModule } from '../../generic-components/reply-button/reply-button.module';
import { CompleteItemButtonComponentModule } from '../../generic-components/complete-item-button/complete-item-button.module';
import { RetweetButtonComponentModule } from '../../generic-components/retweet-button/retweet-button.module';
import { TwitterDmComponentModule } from '../../generic-components/twitter-dm/twitter-dm.module';
import { FollowBackComponentModule } from '../../generic-components/follow-back/follow-back.module';

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
