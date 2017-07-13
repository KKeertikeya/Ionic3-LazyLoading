import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxTagsPage } from './inbox-tags';

import { RowPipeModule } from '../../pipes/rowPipe.module';

@NgModule({
  declarations: [
    InboxTagsPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxTagsPage),
    RowPipeModule
  ],
  exports: [
    InboxTagsPage
  ]
})
export class InboxTagsPageModule {}
