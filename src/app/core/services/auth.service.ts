import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MD5 } from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo;

  constructor(
    private http: HttpClient
  ) { }

  login(username, password, token) {
    return this.http.post('api/auth/login', {
      username: username,
      password: MD5(password).toString(),
      token: token
    })
  }

  getProfile() {
    return this.http.get('api/profile')
  }

}
