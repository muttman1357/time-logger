import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class SharedService {
 eventLoader = new ReplaySubject(1);

 reLoadEvents() {
   this.eventLoader.next(true);
 }

}
