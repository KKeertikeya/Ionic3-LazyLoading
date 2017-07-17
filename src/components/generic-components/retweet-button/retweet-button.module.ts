import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetweetButtonComponent } from './retweet-button';

@NgModule({
  declarations: [
    RetweetButtonComponent,
  ],
  imports: [
    IonicPageModule.forChild(RetweetButtonComponent),
  ],
  exports: [
    RetweetButtonComponent
  ]
})
export class RetweetButtonComponentModule {}
