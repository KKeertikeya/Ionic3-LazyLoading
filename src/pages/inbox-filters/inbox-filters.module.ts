import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxFiltersPage } from './inbox-filters';

import { InboxTagsPageModule } from '../inbox-tags/inbox-tags.module';

import { RowPipeModule } from '../../pipes/rowPipe.module';

@NgModule({
  declarations: [
    InboxFiltersPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxFiltersPage),
    RowPipeModule,
    InboxTagsPageModule
  ],
  exports: [
    InboxFiltersPage
  ]
})
export class InboxFiltersPageModule {}
