import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'src/app/core/components/breadcrumb/breadcrumb.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { TagListModule } from 'src/app/core/components/tag-list/tag-list.module';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { AvatarModule } from 'src/app/core/components/avatar/avatar.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NewThreadModule } from 'src/app/core/components/new-thread/new-thread.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzGridModule,
    NzIconModule,
    NzTagModule,
    NzAvatarModule,
    AvatarModule,
    PipesModule,
    NzPaginationModule,
    NzSelectModule,
    BreadcrumbModule,
    NzInputModule,
    TagListModule,
    NzInputModule,
    NzButtonModule,
    NzSkeletonModule,
    NewThreadModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      },
    ]),
  ]
})
export class HomeModule { }
