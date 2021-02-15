import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FDatePipe } from './f-date.pipe';
import { DzCodePipe } from './dz-code.pipe';



@NgModule({
  declarations: [FDatePipe, DzCodePipe],
  imports: [
    CommonModule
  ],
  exports: [FDatePipe, DzCodePipe]
})
export class PipesModule { }
