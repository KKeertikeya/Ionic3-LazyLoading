import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReplyButtonComponent } from './reply-button';

@NgModule({
  declarations: [
    ReplyButtonComponent,
  ],
  imports: [
    IonicPageModule.forChild(ReplyButtonComponent),
  ],
  exports: [
    ReplyButtonComponent
  ]
})
export class ReplyButtonComponentModule {}
