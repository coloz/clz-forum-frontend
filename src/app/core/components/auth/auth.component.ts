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


  username;
  password;
  token;

  constructor(
    private authService: AuthService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private message: NzMessageService,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.username, this.password, this.token).subscribe(resp => {
      console.log('resp', resp);
      this.modal.closeAll()
      // const ref: NzModalRef = this.modal.info();
      // ref.close();
    })
  }

  public executeImportantAction(): void {
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => this.handleToken(token));
  }

  handleToken(token) {
    console.log(token);
    this.token = token
  }


}
