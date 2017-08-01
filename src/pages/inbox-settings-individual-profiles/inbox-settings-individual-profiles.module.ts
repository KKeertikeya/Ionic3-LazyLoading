import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxSettingsIndividualProfilesPage } from './inbox-settings-individual-profiles';

@NgModule({
  declarations: [
    InboxSettingsIndividualProfilesPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxSettingsIndividualProfilesPage),
  ],
  exports: [
    InboxSettingsIndividualProfilesPage
  ]
})
export class InboxSettingsIndividualProfilesPageModule {}
