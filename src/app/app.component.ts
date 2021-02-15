import { Component } from '@angular/core';
import { ViewService } from './core/services/view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forum';
  array = ["广告1", "广告2", "广告3", "广告4"];

  currentUid;

  constructor(
    private viewService: ViewService
  ) {

  }

  ngOnInit() {
    this.viewService.userCard.subscribe(uid => {
      this.currentUid = uid
    })
  }

}
