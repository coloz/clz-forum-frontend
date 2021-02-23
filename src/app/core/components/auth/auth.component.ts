import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { NzMessageService } from 'ng-zorro-antd/message';
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
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.username, this.password);
    this.authService.login(this.username, this.password, this.token).subscribe(resp => {
      this.message.success(JSON.stringify(resp))
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
