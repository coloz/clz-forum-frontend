import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { RouterModule } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    NzMenuModule,
    RouterModule.forChild([
      {
        path: '',
        component: SettingComponent
      },
    ]),
  ]
})
export class SettingModule { }
