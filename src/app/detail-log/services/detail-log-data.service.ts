import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class DetailLogDataService {

  constructor(private db: AngularFireDatabase) { }


  getLogById(listPath: string, id: string): Observable<any> {
    return this.db.object(`/${listPath}/${id}`).valueChanges();
  }

}
