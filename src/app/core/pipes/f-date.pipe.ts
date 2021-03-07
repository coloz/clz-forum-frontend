import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fDate'
})
export class FDatePipe implements PipeTransform {

  transform(value: any): string {
    var dateTime = new Date(value * 1000);
    var year = dateTime.getFullYear()
    var month = dateTime.getMonth() + 1
    var day = dateTime.getDate()
    var hour = dateTime.getHours()
    var minute = dateTime.getMinutes()
    // var second = dateTime.getSeconds()
    var millisecond = dateTime.getTime() // 将当前编辑的时间转换为毫秒
    var now = new Date() // 获取本机当前的时间
    var nowNew = now.getTime() // 将本机的时间转换为毫秒
    var milliseconds = 0
    var timeSpanStr
    milliseconds = nowNew - millisecond
    if (milliseconds <= 1000 * 60 * 1) { // 小于一分钟展示为刚刚
      timeSpanStr = '刚刚'
    } else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) { // 大于一分钟小于一小时展示为分钟
      timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前'
    } else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) { // 大于一小时小于一天展示为小时
      timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前'
    } else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) { // 大于一天小于十五天展示位天
      timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前'
    } else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year === now.getFullYear()) {
      timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute
    } else {
      timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute
    }
    return timeSpanStr
  }

}
