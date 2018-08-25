import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class UpdateDataService {

  constructor(private db: AngularFireDatabase) { }

  postTime(list: string, item: object): void {
    this.db.list(list).push(item);
  }


}
