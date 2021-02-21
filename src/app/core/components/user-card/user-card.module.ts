import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AvatarModule } from '../avatar/avatar.module';

@NgModule({
  declarations: [UserCardComponent],
  imports: [
    CommonModule,
    NzAvatarModule,
    NzDividerModule,
    NzButtonModule,
    AvatarModule
  ],
  exports: [UserCardComponent]
})
export class UserCardModule { }
