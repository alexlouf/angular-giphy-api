import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(
      private httpClient: HttpClient
  ) { }

  search(search) {
      // tslint:disable-next-line:max-line-length
      const url = 'https://api.giphy.com/v1/gifs/search?api_key=N6WQXDbGr3he3yiDfuIq8YbEGUq8kZTY&q=' + search + '&limit=10&offset=0&rating=G&lang=fr';

      console.log(url);

      return this.httpClient.get(url);
  }
}
