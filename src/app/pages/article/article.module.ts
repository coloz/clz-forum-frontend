import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { BreadcrumbModule } from 'src/app/core/components/breadcrumb/breadcrumb.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { UserCardModule } from 'src/app/core/components/user-card/user-card.module';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AvatarModule } from 'src/app/core/components/avatar/avatar.module';



@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule,
    NzInputModule,
    NzAvatarModule,
    PipesModule,
    BreadcrumbModule,
    NzGridModule,
    UserCardModule,
    NzDividerModule,
    NzButtonModule,
    AvatarModule,
    RouterModule.forChild([
      {
        path: '',
        component: ArticleComponent
      },
    ]),
  ]
})
export class ArticleModule { }
