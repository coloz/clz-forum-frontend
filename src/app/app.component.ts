import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  currentUid;

  constructor(
    private viewService: ViewService,
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.viewService.userCard.subscribe(uid => {
      setTimeout(() => {
        this.currentUid = uid
      });

    })
  }

  goto(item = { type: 'home', id: 0 }) {
    switch (item.type) {
      case 'home':
        this.router.navigate(['/'])
        break;
      case 'category':
        this.router.navigate(['/'], { queryParams: { cat: item.id } })
        break;
      case 'thread':
        this.router.navigate(['/t', item.id])
        break;
      default:
        break;
    }
  }

}
