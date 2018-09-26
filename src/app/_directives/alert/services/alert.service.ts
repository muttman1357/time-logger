import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AlertService {

  constructor() { }

  getMessage(): Observable<any> {
    return new Observable();
  }

}
