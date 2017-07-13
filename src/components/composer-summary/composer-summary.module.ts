import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComposerSummaryComponent } from './composer-summary';

import { InboxTagsPageModule } from '../../pages/inbox-tags/inbox-tags.module';

@NgModule({
  declarations: [
    ComposerSummaryComponent,
  ],
  imports: [
    IonicPageModule.forChild(ComposerSummaryComponent),
    InboxTagsPageModule
  ],
  exports: [
    ComposerSummaryComponent,
    InboxTagsPageModule
  ]
})
export class ComposerSummaryComponentModule {}
