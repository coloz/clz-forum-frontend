import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarListComponent } from './star-list.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  declarations: [StarListComponent],
  imports: [
    CommonModule,
    NzAvatarModule
  ],
  exports: [StarListComponent]
})
export class StarListModule { }
