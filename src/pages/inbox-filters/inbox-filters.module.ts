import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxFiltersPage } from './inbox-filters';

import { RowPipeModule } from '../../pipes/rowPipe.module';

@NgModule({
  declarations: [
    InboxFiltersPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxFiltersPage),
    RowPipeModule
  ],
  exports: [
    InboxFiltersPage
  ]
})
export class InboxFiltersPageModule {}
