import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class DetailLogDataService {

  constructor(private db: AngularFireDatabase) { }


  getLogById(listPath: string, id: string): Observable<any> {
    return this.db.object(`/${listPath}/${id}`).valueChanges();
  }

  deleteLogById(listPath: string, id: string) {
      this.db.object(`${listPath}/${id}`).remove();
  }

  updateTime(id: string, listPath: string, item: object): void {
    this.db.object(`${listPath}/${id}`).update(item);
  }

}
