import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FDatePipe } from './f-date.pipe';



@NgModule({
  declarations: [FDatePipe],
  imports: [
    CommonModule
  ],
  providers: [FDatePipe],
  exports: [FDatePipe]
})
export class PipesModule { }
