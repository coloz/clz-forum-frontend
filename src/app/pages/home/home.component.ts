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

  orderMode = '0';

  isLoading = true;

  get navList() {
    return this.viewService.navList
  }

  constructor(
    private discuzService: DiscuzService,
    private viewService: ViewService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.viewService.userCard.next(3);
    this.viewService.navList = []
    for (let index = 0; index < this.pageSize; index++) {
      this.items.push({})
    }
  }

  ngAfterViewInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (typeof params.cat != 'undefined') {
        this.category = params.cat
      } else {
        this.category = -1;
      }
      this.pageIndex = 1;
      setTimeout(() => {
        // 自适应每页显示数量
        // this.pageSize = Math.floor(this.threadListBox.nativeElement.clientHeight / 69);
        this.update()
      })
    })

  }

  pageIndexChange(e) {
    this.viewService.scroll2Top()
    this.update()
  }

  update() {
    this.isLoading = true;
    let params = { pageIndex: this.pageIndex, pageSize: this.pageSize, order: this.orderMode }
    if (this.category != -1) {
      params['category'] = this.category
    }
    this.discuzService.getThreadAll(params).subscribe(resp => {
      this.items = resp.data;
      this.total = resp.total;
      this.isLoading = false;
      if (resp.tags.length > 0)
        this.viewService.navList = [resp.tags[0]]
    })
  }

  getColor() {
    let list = ['', '', '', '', '']
  }

  orderChange(event) {
    this.update()
  }

}
