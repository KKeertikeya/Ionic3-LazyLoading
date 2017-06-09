import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacebookCommentActionButtonsComponent } from './facebook-comment-action-buttons';

@NgModule({
  declarations: [
    FacebookCommentActionButtonsComponent,
  ],
  imports: [
    IonicPageModule.forChild(FacebookCommentActionButtonsComponent),
  ],
  exports: [
    FacebookCommentActionButtonsComponent
  ]
})
export class FacebookCommentActionButtonsComponentModule {}
