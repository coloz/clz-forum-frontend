import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { ConfigLoaderService } from './core/services/config-loader.service';
import { ViewService } from './core/services/view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forum';
  array = ["广告1", "广告2", "广告3", "广告4"];

  get navList() {
    return this.viewService.navList
  }

  // currentUid;

  constructor(
    private viewService: ViewService,
    private configLoader: ConfigLoaderService,
    private authService: AuthService
  ) {

  }

  ngOnInit() {
    this.configLoader.load('app').then((config) => {
      this.loadSiteConfig(config)
      this.loadUserInfo()
    })
  }

  loadUserInfo() {
    this.authService.getProfile().subscribe((resp: any) => {
      if (resp.code == 0)
        this.authService.userInfo = resp.detail
    })
  }

  loadSiteConfig(config) {    
    document.title = config.brand
    let link: any = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = config.favicon;
    document.getElementsByTagName('head')[0].appendChild(link);
  }

}
