import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(username, password) {
    this.http.post('api/login', {
      username: username,
      password: CryptoJS.MD5(password).toString()
    }).subscribe(resp => {
      console.log(resp);
    })
  }

}
