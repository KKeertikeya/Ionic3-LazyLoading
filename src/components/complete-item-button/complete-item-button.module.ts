import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompleteItemButtonComponent } from './complete-item-button';

@NgModule({
  declarations: [
    CompleteItemButtonComponent,
  ],
  imports: [
    IonicPageModule.forChild(CompleteItemButtonComponent),
  ],
  exports: [
    CompleteItemButtonComponent
  ]
})
export class CompleteItemButtonComponentModule {}
