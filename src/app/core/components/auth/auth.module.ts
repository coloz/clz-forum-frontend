import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzTabsModule,
    NzInputModule,
    NzGridModule,
    NzIconModule,
    NzButtonModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
