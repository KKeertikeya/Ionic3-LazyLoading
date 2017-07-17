import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentsComponent } from './comments';

@NgModule({
  declarations: [
    CommentsComponent,
  ],
  imports: [
    IonicPageModule.forChild(CommentsComponent),
  ],
  exports: [
    CommentsComponent
  ]
})
export class CommentsComponentModule {}
