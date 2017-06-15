import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxFiltersPage } from './inbox-filters';

@NgModule({
  declarations: [
    InboxFiltersPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxFiltersPage),
  ],
  exports: [
    InboxFiltersPage
  ]
})
export class InboxFiltersPageModule {}
