import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacebookMessageActionButtonsComponent } from './facebook-message-action-buttons';

import { ReplyButtonComponentModule } from '../reply-button/reply-button.module';
import { ViewConversationButtonComponentModule } from '../view-conversation-button/view-conversation-button.module';
import { CompleteItemButtonComponentModule } from '../complete-item-button/complete-item-button.module';


@NgModule({
  declarations: [
    FacebookMessageActionButtonsComponent,
  ],
  imports: [
    IonicPageModule.forChild(FacebookMessageActionButtonsComponent),
    ReplyButtonComponentModule,
    ViewConversationButtonComponentModule,
    CompleteItemButtonComponentModule,
  ],
  exports: [
    FacebookMessageActionButtonsComponent
  ]
})
export class FacebookMessageActionButtonsComponentModule {}
