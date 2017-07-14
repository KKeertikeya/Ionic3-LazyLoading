import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowMoreComponent } from './show-more';

@NgModule({
  declarations: [
    ShowMoreComponent,
  ],
  imports: [
    IonicPageModule.forChild(ShowMoreComponent),
  ],
  exports: [
    ShowMoreComponent
  ]
})
export class ShowMoreComponentModule {}
