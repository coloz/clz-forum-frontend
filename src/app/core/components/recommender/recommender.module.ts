import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommenderComponent } from './recommender.component';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [RecommenderComponent],
  imports: [
    CommonModule,
    NzIconModule
  ],
  exports: [RecommenderComponent]
})
export class RecommenderModule { }
