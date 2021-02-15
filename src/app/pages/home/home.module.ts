import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NzIconModule,
    NzTagModule,
    NzAvatarModule,
    PipesModule,
    NzPaginationModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      },
    ]),
  ]
})
export class HomeModule { }
