import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscuzService } from 'src/app/core/services/discuz.service';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/i18n/zh-cn';
import { ViewService } from 'src/app/core/services/view.service';
import { SimplemdeComponent } from 'ngx-simplemde';
import { Datasource } from 'ngx-ui-scroll';
import { AuthService } from 'src/app/core/services/auth.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthComponent } from 'src/app/core/components/auth/auth.component';

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

  datasource = new Datasource({
    get: (index, count) => this.getData(index, count),
    settings: {
      windowViewport: true,
      minIndex: 1,
      startIndex: 1,
      bufferSize: 10,
    }
  })

  get navList() {
    return this.viewService.navList
  }

  constructor(
    private discuzService: DiscuzService,
    private activatedRoute: ActivatedRoute,
    private viewService: ViewService,
    private authService: AuthService,
    private modal: NzModalService
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
    setTimeout(() => {
      this.datasource.adapter.check();
    }, 50)
    return this.discuzService.getThreadPosts({ tid, index, count })
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

  inputMode = false;
  showInput() {
    if (this.authService.userInfo)
      this.inputMode = true;
    else
      this.openAuthModel()
  }

  openAuthModel() {
    this.modal.create({
      nzContent: AuthComponent,
      nzFooter: null,
      nzClosable: false,
      nzWidth: '500px'
    })
  }
}
