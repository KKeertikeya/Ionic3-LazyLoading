import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComposerSummaryComponent } from './composer-summary';

@NgModule({
  declarations: [
    ComposerSummaryComponent,
  ],
  imports: [
    IonicPageModule.forChild(ComposerSummaryComponent),
  ],
  exports: [
    ComposerSummaryComponent
  ]
})
export class ComposerSummaryComponentModule {}
