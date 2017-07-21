import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionButtonsComponent } from './action-buttons';

@NgModule({
  declarations: [
    ActionButtonsComponent,
  ],
  imports: [
    IonicPageModule.forChild(ActionButtonsComponent),
  ],
  exports: [
    ActionButtonsComponent
  ]
})
export class ActionButtonsComponentModule {}
