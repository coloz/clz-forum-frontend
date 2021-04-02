import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MD5 } from 'crypto-js';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo;

  isLogin = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private message: NzMessageService
  ) { }

  login(username, password, token) {
    return this.http.post('api/auth/login', {
      username: username,
      password: MD5(password).toString(),
      token: token
    })
  }

  logout() {
    localStorage.removeItem('access_token')
    this.userInfo = null
    this.message.success('已登出');
  }

  getProfile() {
    this.http.get('api/profile').subscribe((resp: any) => {
      if (resp.code == 0) {
        this.userInfo = resp.detail
        this.isLogin.next(true)
      }
    })
  }

}
