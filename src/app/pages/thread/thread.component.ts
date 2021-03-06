import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscuzService } from 'src/app/core/services/discuz.service';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/i18n/zh-cn';
import { ViewService } from 'src/app/core/services/view.service';
import { SimplemdeComponent } from 'ngx-simplemde';
import { IDatasource } from 'ngx-ui-scroll';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  items = [];
  tid;

  threadInfo: {
    tid
    subject
    recommend_add
    favtimes
    dateline
    views
    replies
    author
    authorid
  }

  // subject;
  // like;
  // favtimes;
  // views;

  inputValue = "";
  inputValue_render = "";


  pageIndex = 1;
  pageSize = 10;
  total;

  loading: boolean;

  datasource: IDatasource = {
    get: (index, count) => this.getData(index, count),
    settings: {
      windowViewport: true,
      minIndex: 1,
      startIndex: 1,
      bufferSize: 10,
    }
  }

  get navList() {
    return this.viewService.navList
  }

  constructor(
    private discuzService: DiscuzService,
    private activatedRoute: ActivatedRoute,
    private viewService: ViewService,
  ) { }

  @ViewChild('simplemde', { static: true }) private readonly simplemde: SimplemdeComponent;

  options = {
    toolbar: ['bold', 'italic', 'heading', '|', 'quote']
  };

  demo;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.tid = params.tid
      this.discuzService.getThreadInfo(this.tid).subscribe(resp => {
        this.threadInfo = resp
      })
    })
  }

  ngAfterViewInit(): void {
    this.viewService.scroll2Top()

    // this.simplemde.setOptions('lineNumbers', true);
  }

  ngOnDestroy(): void {
    this.viewService.navList.pop()
  }

  getData(index, count) {
    let tid = this.tid;
    return this.discuzService.getThreadPosts({ tid, index, count })
    // return this.discuzService.getThread({ tid: this.tid, pageIndex: index, pageSize: count })
    //   .pipe(map((resp: any) => resp.data.list))
  }

  // async update() {
  //   return new Promise((resolve, reject) => {
  //     this.discuzService.getThread({ tid: this.tid, pageIndex: this.pageIndex, pageSize: this.pageSize }).subscribe(resp => {
  //       // console.log(resp);
  //       this.items = resp.data.list;
  //       this.total = resp.data.total;
  //       this.subject = resp.data.subject;
  //       this.like = resp.data.like;
  //       this.favtimes = resp.data.favtimes;
  //       this.views = resp.data.views;
  //       this.viewService.navList.push({
  //         type: 'thread',
  //         text: this.items[0].subject,
  //         id: this.tid
  //       })
  //       resolve(true)
  //     })
  //   })
  // }

  initEditor() {
    const editor = new Editor({
      el: document.querySelector('#editor'),
      previewStyle: 'tab',
      height: '200px',
      initialValue: 'content',
      language: 'zh-CN'
    });
  }

  inputMode = false;
  showInput() {
    this.inputMode = true;
  }
}
