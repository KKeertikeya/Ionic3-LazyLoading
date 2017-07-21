import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxDirectMessagePage } from './inbox-direct-message';

@NgModule({
  declarations: [
    InboxDirectMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(InboxDirectMessagePage),
  ],
  exports: [
    InboxDirectMessagePage
  ]
})
export class InboxDirectMessagePageModule {}
