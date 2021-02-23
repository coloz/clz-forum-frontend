import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MD5 } from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(username, password, token) {
    this.http.post('api/auth/login', {
      username: username,
      password: MD5(password).toString(),
      token: token
    }).subscribe(resp => {
      console.log(resp);
    })
  }

}
