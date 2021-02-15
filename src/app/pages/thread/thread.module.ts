import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreadComponent } from './thread.component';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

@NgModule({
  declarations: [ThreadComponent],
  imports: [
    CommonModule,
    NzInputModule,
    NzAvatarModule,
    PipesModule,
    VirtualScrollerModule,
    RouterModule.forChild([
      {
        path: '',
        component: ThreadComponent
      },
    ]),
  ]
})
export class ThreadModule { }
