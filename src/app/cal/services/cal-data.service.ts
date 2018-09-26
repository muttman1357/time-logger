import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CalDataService {

  constructor(private db: AngularFireDatabase,
              private http: HttpClient) { }

  // getEvents(listPath): Observable<any> {
  //   return this.db.list(listPath).snapshotChanges().map(changes => {
  //     return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
  //   });
  // }

  getEvents(listPath): Observable<any> {
    return this.http.get(`https://time-logger-54930.firebaseio.com/${listPath}.json`);
  }



}
