import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreadComponent } from './thread.component';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
// import { TuiModule } from 'ngx-tui';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { PipesModule } from 'src/app/core/pipes/pipes.module';

@NgModule({
  declarations: [ThreadComponent],
  imports: [
    CommonModule,
    NzInputModule,
    NzAvatarModule,
    PipesModule,
    // TuiModule,
    RouterModule.forChild([
      {
        path: '',
        component: ThreadComponent
      },
    ]),
  ]
})
export class ThreadModule { }
