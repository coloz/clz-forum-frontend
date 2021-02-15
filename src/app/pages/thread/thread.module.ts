import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreadComponent } from './thread.component';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { TuiModule } from 'ngx-tui-editor';

@NgModule({
  declarations: [ThreadComponent],
  imports: [
    CommonModule,
    NzInputModule,
    TuiModule,
    RouterModule.forChild([
      {
        path: '',
        component: ThreadComponent
      },
    ]),
  ]
})
export class ThreadModule { }
