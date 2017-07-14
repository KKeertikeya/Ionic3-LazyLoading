import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendLikeButtonComponent } from './send-like-button';

@NgModule({
  declarations: [
    SendLikeButtonComponent,
  ],
  imports: [
    IonicPageModule.forChild(SendLikeButtonComponent),
  ],
  exports: [
    SendLikeButtonComponent
  ]
})
export class SendLikeButtonComponentModule {}
