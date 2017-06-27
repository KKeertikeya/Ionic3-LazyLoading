import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxSearch } from './inboxSearch.pipe';

@NgModule({
  declarations: [
    InboxSearch
  ],
  imports: [
    IonicPageModule.forChild(InboxSearch),
  ],
  exports: [
    InboxSearch
  ]
})
export class InboxSearchPipeModule {}
