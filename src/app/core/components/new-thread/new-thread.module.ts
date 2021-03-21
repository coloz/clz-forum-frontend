import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThreadComponent } from './new-thread.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SimplemdeConfig, SimplemdeModule } from 'ngx-simplemde';
import { FormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

@NgModule({
  declarations: [NewThreadComponent],
  imports: [
    CommonModule,
    NzTagModule,
    NzInputModule,
    SimplemdeModule,
    FormsModule,
    NzAutocompleteModule
  ],
  providers: [SimplemdeConfig],
  exports: [NewThreadComponent]
})
export class NewThreadModule { }
