import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Time} from '../classes/Time';

@Injectable()
export class LogFormDataService {

  constructor(private db: AngularFireDatabase) { }

  postTime(list: string, item: Time): void {
    this.db.list(list).push(item);
  }

}
