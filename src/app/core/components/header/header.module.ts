import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AuthModule } from '../auth/auth.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NzInputModule,
    NzIconModule,
    RouterModule.forChild([]),
    NzModalModule,
    AuthModule,
    NzGridModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
