import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './classes/User';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('');
  }

  getById(id: number) {
    return this.http.get('' + id);
  }

  create(user: User) {
    return this.http.post('', user);
  }

  update(user: User) {
    return this.http.put('' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('' + id);
  }



}
