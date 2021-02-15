import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscuzService } from 'src/app/core/services/discuz.service';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/i18n/zh-cn';

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

  constructor(
    private discuzService: DiscuzService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.tid = params.tid
      this.update()
    })
  }

  ngAfterViewInit(): void {
    const editor = new Editor({
      el: document.querySelector('#editor'),
      previewStyle: 'tab',
      height: '200px',
      initialValue: 'content',
      language: 'zh-CN'
    });
  }

  update() {
    this.discuzService.getThread({ tid: this.tid, pageIndex: this.pageIndex, pageSize: this.pageSize }).subscribe(resp => {
      this.items = resp
    })
  }

}
