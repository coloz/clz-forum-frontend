import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  items = [, , , ,]

  constructor(
    private modal: NzModalService
  ) { }


  ngOnInit(): void {
  }

  openAuthModel() {
    this.modal.create({
      nzContent: AuthComponent,
      nzFooter: null,
      nzClosable: false
    })
  }

}
