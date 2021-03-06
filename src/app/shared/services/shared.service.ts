import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SharedService {
 eventLoader = new ReplaySubject(1);
 addEventSubject = new ReplaySubject(1);

  /**
   * sets eventloader next for eventLoader.
   */
 reLoadEvents() {
   this.eventLoader.next(true);
 }

  /**
   * Sets next for addEventSubject.
   * @param e
   */
 addEvent(e) {
   this.addEventSubject.next(e);
 }

}
