import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from './tag-list.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [TagListComponent],
  imports: [
    CommonModule,
    NzDividerModule,
    NzCardModule
  ],
  exports: [TagListComponent]
})
export class TagListModule { }
