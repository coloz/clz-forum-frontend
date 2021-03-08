import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from '../../services/auth.service';
import { ConfigLoaderService } from '../../services/config-loader.service';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: {
    top: any[],
    user: any[]
  };

  get userInfo() {
    return this.authService.userInfo
  }

  constructor(
    private modal: NzModalService,
    private authService: AuthService,
    private configLoader: ConfigLoaderService
  ) { }


  ngOnInit(): void {
    this.configLoader.load('menu').then(config => {
      this.menu = config
    })
  }

  openAuthModel() {
    this.modal.create({
      nzContent: AuthComponent,
      nzFooter: null,
      nzClosable: false,
      nzWidth: '500px'
    })
  }

  logout() {
    this.authService.logout()
  }
}
