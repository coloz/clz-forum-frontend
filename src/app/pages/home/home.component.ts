import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  pageSize = 10;
  total;

  constructor(
    private discuzService: DiscuzService,
    private viewService: ViewService
  ) { }

  ngOnInit(): void {
    this.viewService.userCard.next(3);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.pageSize = Math.floor(this.threadListBox.nativeElement.clientHeight / 69);
      this.update()
    })
  }

  pageIndexChange(e) {
    this.update()
  }

  update() {
    this.discuzService.getThreadAll({ pageIndex: this.pageIndex, pageSize: this.pageSize }).subscribe(resp => {
      this.items = resp.data;
      this.total = resp.total
    })
  }

}
