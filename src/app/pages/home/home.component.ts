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

  constructor(
    private discuzService: DiscuzService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.pageSize = Math.floor(this.threadListBox.nativeElement.clientHeight / 69);
    this.update()
  }

  pageIndexChange(e) {
    this.update()
  }

  update() {
    this.discuzService.getThreadAll({ pageIndex: this.pageIndex, pageSize: this.pageSize }).subscribe(resp => {
      this.items = resp
    })
  }

}
