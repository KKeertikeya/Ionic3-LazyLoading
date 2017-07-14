import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewConversationButtonComponent } from './view-conversation-button';

@NgModule({
  declarations: [
    ViewConversationButtonComponent,
  ],
  imports: [
    IonicPageModule.forChild(ViewConversationButtonComponent),
  ],
  exports: [
    ViewConversationButtonComponent
  ]
})
export class ViewConversationButtonComponentModule {}
