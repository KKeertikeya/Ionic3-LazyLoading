import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacebookMessageActionButtonsComponent } from './facebook-message-action-buttons';

import { ReplyButtonComponentModule } from '../../generic-components/reply-button/reply-button.module';
import { ViewConversationButtonComponentModule } from '../../generic-components/view-conversation-button/view-conversation-button.module';
import { CompleteItemButtonComponentModule } from '../../generic-components/complete-item-button/complete-item-button.module';
import { SendLikeButtonComponentModule } from '../../generic-components/send-like-button/send-like-button.module';



@NgModule({
  declarations: [
    FacebookMessageActionButtonsComponent,
  ],
  imports: [
    IonicPageModule.forChild(FacebookMessageActionButtonsComponent),
    ReplyButtonComponentModule,
    ViewConversationButtonComponentModule,
    CompleteItemButtonComponentModule,
    SendLikeButtonComponentModule,
  ],
  exports: [
    FacebookMessageActionButtonsComponent
  ]
})
export class FacebookMessageActionButtonsComponentModule {}
