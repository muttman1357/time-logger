import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UpdateDataService {

  constructor(private db: AngularFireDatabase) { }

  getLogById(listPath: string, id: string): Observable<any> {
    return this.db.object(`/${listPath}/${id}`).valueChanges();
  }

  updateTime(id: string, listPath: string, item: object): void {
    this.db.object(`${listPath}/${id}`).update(item);
  }


}
