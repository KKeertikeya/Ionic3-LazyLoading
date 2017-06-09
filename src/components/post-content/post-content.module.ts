import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostContentComponent } from './post-content';

@NgModule({
  declarations: [
    PostContentComponent,
  ],
  imports: [
    IonicPageModule.forChild(PostContentComponent),
  ],
  exports: [
    PostContentComponent
  ]
})
export class PostContentComponentModule {}
