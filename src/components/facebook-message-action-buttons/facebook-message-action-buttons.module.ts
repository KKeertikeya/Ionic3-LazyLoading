import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacebookMessageActionButtonsComponent } from './facebook-message-action-buttons';

@NgModule({
  declarations: [
    FacebookMessageActionButtonsComponent,
  ],
  imports: [
    IonicPageModule.forChild(FacebookMessageActionButtonsComponent),
  ],
  exports: [
    FacebookMessageActionButtonsComponent
  ]
})
export class FacebookMessageActionButtonsComponentModule {}
