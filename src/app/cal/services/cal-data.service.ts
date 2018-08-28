import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class CalDataService {

  constructor(private db: AngularFireDatabase) { }

  getEvents(listPath): Observable<any> {
    return this.db.list(listPath).snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });
  }

}
