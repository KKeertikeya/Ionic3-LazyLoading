import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RowPipe } from './row.pipe';

@NgModule({
  declarations: [
    RowPipe
  ],
  imports: [
    IonicPageModule.forChild(RowPipe),
  ],
  exports: [
    RowPipe
  ]
})
export class RowPipeModule {}
