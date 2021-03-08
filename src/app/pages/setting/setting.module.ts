import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SettingComponent
      },
    ]),
  ]
})
export class SettingModule { }
