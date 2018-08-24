import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class TimelogDataService {

  constructor(private db: AngularFireDatabase) { }

  getLogs(listPath): Observable<any> {
    return this.db.list(listPath).snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });
  }

}
