import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  username;
  password;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.username, this.password);

    this.authService.login(this.username, this.password);
  }

}
