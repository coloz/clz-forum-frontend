import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from '../../services/auth.service';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  items = [
    {
      text: '资源中心',
      url: 'https://www.arduino.cn/resource.php'
    }, {
      text: '社区活动',
      url: 'https://www.arduino.cn/forum-68-1.html'
    }, {
      text: 'Arduino教程',
      url: 'https://www.arduino.cn/thread-1066-1-1.html'
    }, {
      text: '物联网教程',
      url: 'https://www.arduino.cn/thread-83754-1-1.html'
    }
  ]

  get userInfo() {
    return this.authService.userInfo
  }

  constructor(
    private modal: NzModalService,
    private authService: AuthService
  ) { }


  ngOnInit(): void {
  }

  openAuthModel() {
    this.modal.create({
      nzContent: AuthComponent,
      nzFooter: null,
      nzClosable: false,
      nzWidth: '500px'
    })
  }

}
