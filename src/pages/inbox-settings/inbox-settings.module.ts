import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxSettingsPage } from './inbox-settings';

import { InboxSettingsIndividualProfilesPageModule } from '../inbox-settings-individual-profiles/inbox-settings-individual-profiles.module';

@NgModule({
  declarations: [
    InboxSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxSettingsPage),
    InboxSettingsIndividualProfilesPageModule,
    
  ],
  exports: [
    InboxSettingsPage
  ]
})
export class InboxSettingsPageModule {}
