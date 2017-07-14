import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowBackComponent } from './follow-back';

@NgModule({
  declarations: [
    FollowBackComponent,
  ],
  imports: [
    IonicPageModule.forChild(FollowBackComponent),
  ],
  exports: [
    FollowBackComponent
  ]
})
export class FollowBackComponentModule {}
