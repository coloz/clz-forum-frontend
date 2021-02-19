import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    NzBreadCrumbModule,
    NzIconModule
  ],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule { }
