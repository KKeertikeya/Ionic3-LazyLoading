import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComposerDetailComponent } from './composer-detail';

@NgModule({
  declarations: [
    ComposerDetailComponent,
  ],
  imports: [
    IonicPageModule.forChild(ComposerDetailComponent),
  ],
  exports: [
    ComposerDetailComponent
  ]
})
export class ComposerDetailComponentModule {}
