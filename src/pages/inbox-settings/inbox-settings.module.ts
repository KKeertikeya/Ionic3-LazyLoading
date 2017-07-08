import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxSettingsPage } from './inbox-settings';

@NgModule({
  declarations: [
    InboxSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxSettingsPage),
  ],
  exports: [
    InboxSettingsPage
  ]
})
export class InboxSettingsPageModule {}
