import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscuzService } from 'src/app/core/services/discuz.service';
import { ViewService } from 'src/app/core/services/view.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('threadListBox') threadListBox: ElementRef;

  items = []

  pageIndex = 1;
  pageSize = 20;
  total;

  category = -1;

  constructor(
    private discuzService: DiscuzService,
    private viewService: ViewService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.viewService.userCard.next(3);
  }

  ngAfterViewInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (typeof params.cat != 'undefined') {
        this.category = params.cat
      } else {
        this.category = -1;
      }

      setTimeout(() => {
        // this.pageSize = Math.floor(this.threadListBox.nativeElement.clientHeight / 69);
        this.update()
      })
    })

  }

  pageIndexChange(e) {
    document.body.scrollTop=document.documentElement.scrollTop=0
    this.update()
  }

  update() {
    let params = { pageIndex: this.pageIndex, pageSize: this.pageSize }
    if (this.category != -1) {
      params['category'] = this.category
    }
    this.discuzService.getThreadAll(params).subscribe(resp => {
      this.items = resp.data;
      this.total = resp.total;
      if (resp.tags.length > 0)
        this.viewService.navList = [resp.tags[0]]
    })
  }

  getColor() {
    let list = ['', '', '', '', '']
  }

}
