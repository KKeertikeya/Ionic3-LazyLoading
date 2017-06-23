import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxFilter } from './inboxFilter.pipe';

@NgModule({
  declarations: [
    InboxFilter,
  ],
  imports: [
    IonicPageModule.forChild(InboxFilter),
  ],
  exports: [
    InboxFilter
  ]
})
export class InboxFilterPipeModule {}