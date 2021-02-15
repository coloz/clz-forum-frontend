import { Pipe, PipeTransform } from '@angular/core';
import bbobHTML from '@bbob/html'
import presetHTML5 from '@bbob/preset-html5'
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'bbCode'
})
export class DzCodePipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  transform(value: string): unknown {
    let processed = bbobHTML(value.replace(/^[\r\n]*/g,'').replace(/[\r\n]*$/g, '').replace(/\n/g, '<br>'), presetHTML5())
    return this.sanitizer.bypassSecurityTrustHtml(processed)
  }

}
