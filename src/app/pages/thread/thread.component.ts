import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscuzService } from 'src/app/core/services/discuz.service';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/i18n/zh-cn';
import { ViewService } from 'src/app/core/services/view.service';
import { IPageInfo } from 'ngx-virtual-scroller';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  items = [];
  tid;
  inputValue = "";
  inputValue_render = "";
  options = {
    initialValue: `# Title of Project`,
    initialEditType: 'markdown',
    previewStyle: 'vertical',
    height: '200px'
  }


  pageIndex = 1;
  pageSize = 10;
  total;

  loading: boolean;

  constructor(
    private discuzService: DiscuzService,
    private activatedRoute: ActivatedRoute,
    private viewService: ViewService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.tid = params.tid
      this.update().then(() => {
        this.viewService.userCard.next(this.items[0].authorid.toString())
      })
    })
  }

  ngAfterViewInit(): void {
    this.initEditor()
  }

  async update() {
    return new Promise((resolve, reject) => {
      this.discuzService.getThread({ tid: this.tid, pageIndex: this.pageIndex, pageSize: this.pageSize }).subscribe(resp => {
        console.log(resp);
        this.items = resp.data;
        this.total = resp.total;
        resolve(true)
      })
    })
  }

  fetchMore(event: IPageInfo) {
    // console.log(event.endIndex, this.items.length);
    if (event.endIndex == -1 || event.endIndex !== this.items.length - 1 || this.items.length >= this.total) return;
    this.pageIndex++;
    this.loading = true;
    this.discuzService.getThread({ tid: this.tid, pageIndex: this.pageIndex, pageSize: this.pageSize }).subscribe(resp => {
      console.log(resp);
      this.items = this.items.concat(resp.data);
      this.total = resp.total;
      this.loading = false
    })
  }

  initEditor() {
    const editor = new Editor({
      el: document.querySelector('#editor'),
      previewStyle: 'tab',
      height: '200px',
      initialValue: 'content',
      language: 'zh-CN'
    });
  }

}
