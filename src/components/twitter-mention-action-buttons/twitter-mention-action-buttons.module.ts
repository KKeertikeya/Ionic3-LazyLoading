import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwitterMentionActionButtonsComponent } from './twitter-mention-action-buttons';

@NgModule({
  declarations: [
    TwitterMentionActionButtonsComponent,
  ],
  imports: [
    IonicPageModule.forChild(TwitterMentionActionButtonsComponent),
  ],
  exports: [
    TwitterMentionActionButtonsComponent
  ]
})
export class TwitterMentionActionButtonsComponentModule {}
