import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TimelogDataService {

  constructor(private db: AngularFireDatabase) { }

  getLogs(listPath): Observable<any> {
    return this.db.list(listPath).valueChanges();
  }
}
