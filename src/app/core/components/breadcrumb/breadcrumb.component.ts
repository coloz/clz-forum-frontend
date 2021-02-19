import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  get navList() {
    return this.viewService.navList
  }

  constructor(
    private viewService: ViewService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
