import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscuzService {

  constructor(
    private http: HttpClient
  ) { }


  getThreadAll(params): any {
    return this.http.post(`api/thread/all`, params)
  }

  getThreadInfo(tid): any {
    return this.http.get(`api/thread/${tid}/info`)
  }

  getThreadPosts({ tid, index, count }): any {
    return this.http.get(`api/thread/${tid}/posts`, {
      params: {
        index: index,
        count: count
      }
    })
  }

  // getThread({ tid, pageIndex, pageSize }): any {
  //   return this.http.get(`api/thread/${tid}?pageIndex=${pageIndex}&pageSize=${pageSize}`)
  // }

  getUser({ uid }): any {
    return this.http.get(`api/user/${uid}`)
  }

  getTags(num): any {
    return this.http.get(`api/tags?num=${num}`)
  }

  getCategorys(num): any {
    return this.http.get(`api/categorys?num=${num}`)
  }


  publishThread() {
    // return this.http.post(`api/thread/`)
  }

  publishPost(tid, post) {
    return this.http.post(`api/thread/${tid}`, post)
  }

}
