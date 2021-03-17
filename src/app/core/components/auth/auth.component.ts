import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  passwordVisible = false;
  username;
  password;
  token;

  isLoading = false;

  constructor(
    private authService: AuthService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private message: NzMessageService,
    private modal: NzModalService,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.isLoading = true;
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => this.handleToken(token));
  }

  handleToken(token) {
    // console.log(token);
    this.token = token;
    this.authService.login(this.username, this.password, this.token).subscribe((resp: any) => {
      console.log('resp', resp);
      if (resp.code == 0) {
        this.authService.userInfo = resp.detail
        this.message.success(`${this.authService.userInfo.username}，欢迎回来`)
        this.modal.closeAll()
      } else {
        this.isLoading = false;
      }
    })
  }

}
