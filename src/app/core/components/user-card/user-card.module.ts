import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
@NgModule({
  declarations: [UserCardComponent],
  imports: [
    CommonModule,
    NzAvatarModule,
    NzDividerModule,
    NzCardModule
  ],
  exports: [UserCardComponent]
})
export class UserCardModule { }
