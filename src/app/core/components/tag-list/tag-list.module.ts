import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from './tag-list.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TagListComponent],
  imports: [
    CommonModule,
    NzDividerModule,
    NzCardModule,
    NzIconModule,
    RouterModule.forChild([]),
  ],
  exports: [TagListComponent]
})
export class TagListModule { }
