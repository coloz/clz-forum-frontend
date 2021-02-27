import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigLoaderService {

  constructor(
    private http: HttpClient,
  ) { }

  load(configFile) {
    return this.http.get(`configs/${configFile}.json`, {
      responseType: 'json',
      headers: { 'Cache-Control': 'public,max-age=600' }
    })
      .toPromise()
      .then((config: any) => {
        return config
      }).catch(error => {
        console.error(error);
      });
  }

  loadUrl(url) {
    return this.http.get(url, {
      responseType: 'json',
      headers: { 'Cache-Control': 'public,max-age=600' }
    })
      .toPromise()
      .then((config: any) => {
        return config
      }).catch(error => {
        console.error(error);
      });
  }


}
