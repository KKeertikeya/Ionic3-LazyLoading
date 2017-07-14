import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPostAndCommentsComponent } from './view-post-and-comments';

@NgModule({
  declarations: [
    ViewPostAndCommentsComponent,
  ],
  imports: [
    IonicPageModule.forChild(ViewPostAndCommentsComponent),
  ],
  exports: [
    ViewPostAndCommentsComponent
  ]
})
export class ViewPostAndCommentsComponentModule {}
