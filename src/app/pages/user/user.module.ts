import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { UserCardModule } from 'src/app/core/components/user-card/user-card.module';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent
      },
    ]),
  ]
})
export class UserModule { }
