import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from '../../shared/user/user.service';

@Injectable()
export class CalDataService {

  constructor(private db: AngularFireDatabase,
              private http: HttpClient,
              private userService: UserService) { }

  // getEvents(listPath): Observable<any> {
  //   return this.db.list(listPath).snapshotChanges().map(changes => {
  //     return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
  //   });
  // }

  getEvents(listPath): Observable<any> {
    return this.http.get(`https://time-logger-54930.firebaseio.com/${listPath}.json`);
  }



}
