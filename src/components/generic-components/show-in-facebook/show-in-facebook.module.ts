import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowInFacebookComponent } from './show-in-facebook';

@NgModule({
  declarations: [
    ShowInFacebookComponent,
  ],
  imports: [
    IonicPageModule.forChild(ShowInFacebookComponent),
  ],
  exports: [
    ShowInFacebookComponent
  ]
})
export class ShowInFacebookComponentModule {}
