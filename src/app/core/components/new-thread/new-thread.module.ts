import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThreadComponent } from './new-thread.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SimplemdeConfig, SimplemdeModule } from 'ngx-simplemde';

@NgModule({
  declarations: [NewThreadComponent],
  imports: [
    CommonModule,
    NzTagModule,
    NzInputModule,
    SimplemdeModule
  ],
  providers: [SimplemdeConfig],
  exports: [NewThreadComponent]
})
export class NewThreadModule { }
