import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreadComponent } from './thread.component';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'src/app/core/components/breadcrumb/breadcrumb.module';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { UserCardModule } from 'src/app/core/components/user-card/user-card.module';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [ThreadComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule,
    NzInputModule,
    NzAvatarModule,
    PipesModule,
    // VirtualScrollerModule,
    BreadcrumbModule,
    NzGridModule,
    UserCardModule,
    NzDividerModule,
    NzButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ThreadComponent
      },
    ]),
  ]
})
export class ThreadModule { }
