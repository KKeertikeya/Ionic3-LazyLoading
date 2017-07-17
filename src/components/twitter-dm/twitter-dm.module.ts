import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwitterDmComponent } from './twitter-dm';

@NgModule({
  declarations: [
    TwitterDmComponent,
  ],
  imports: [
    IonicPageModule.forChild(TwitterDmComponent),
  ],
  exports: [
    TwitterDmComponent
  ]
})
export class TwitterDmComponentModule {}
