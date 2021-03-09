import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscuzService } from 'src/app/core/services/discuz.service';
import { ViewService } from 'src/app/core/services/view.service';
import { SimplemdeComponent } from 'ngx-simplemde';
import { Datasource } from 'ngx-ui-scroll';
import { AuthService } from 'src/app/core/services/auth.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthComponent } from 'src/app/core/components/auth/auth.component';
import { NzMessageService } from 'ng-zorro-antd/message';

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
    total
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

  datasource;

  get navList() {
    return this.viewService.navList
  }

  constructor(
    private discuzService: DiscuzService,
    private activatedRoute: ActivatedRoute,
    private viewService: ViewService,
    private authService: AuthService,
    private modal: NzModalService,
    private message: NzMessageService
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
        document.title = this.threadInfo.subject
        this.viewService.navList.push({ text: this.threadInfo.subject })
        this.datasource = new Datasource({
          get: (index, count) => this.getData(index, count),
          settings: {
            windowViewport: true,
            minIndex: 1,
            maxIndex: this.threadInfo.total,
            startIndex: 1,
            bufferSize: 15,
          }
        })
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

  publish() {
    console.log(this.inputValue);
    this.discuzService.publishPost(this.tid, { content: this.inputValue }).subscribe(async (resp: any) => {
      if (resp.code == 0) {
        this.inputMode = false;
        this.inputValue = '';
        this.message.success('发表成功')

        this.scrollBottom()
        setTimeout(() => {
          this.appendPost(resp.detail.post)
        }, 300)
      }
    })
  }

  doScrollTo() {
    const index = Number(this.threadInfo.total);
    if (!isNaN(index)) {
      this.datasource.adapter.fix({
        scrollToItem: (item) => item.data.id === index,
        scrollToItemOpt: false
      });
    }
  }

  async appendPost(post) {
    await this.datasource.adapter.relax();
    await this.datasource.adapter.append({
      items: [post]
    });
  }

  async scrollBottom() {
    await this.datasource.adapter.fix({ scrollPosition: +Infinity });
  }
}
