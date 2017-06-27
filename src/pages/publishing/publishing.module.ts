import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishingPage } from './publishing';

@NgModule({
  declarations: [
    PublishingPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishingPage),
  ],
  exports: [
    PublishingPage
  ]
})
export class PublishingPageModule {}