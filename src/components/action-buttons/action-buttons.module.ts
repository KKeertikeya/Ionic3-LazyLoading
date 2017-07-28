import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionButtonsComponent } from './action-buttons';


// import { PopoverPageModule } from '../../pages/popover/popover.module';

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
