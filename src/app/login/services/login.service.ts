import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {
  private response;

  constructor(private http: HttpClient) { }

  request() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    return this.http.get(url, {observe: 'body'});
  }

}
