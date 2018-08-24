import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {TimelogDataService} from './services/timelog-data.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {computeMsgId} from '@angular/compiler/src/i18n/digest';
import {SharedService} from '../shared/services/shared.service';

@Component({
  selector: 'tl-timelog',
  templateUrl: './timelog.component.html',
  styleUrls: ['./timelog.component.scss']
})
export class TimelogComponent implements OnInit {
  @Output() log = new EventEmitter<string>();
  logs: Observable<any>;
  logSub: Subscription;

  constructor(
    private timelogDataService: TimelogDataService
  ) { }

  ngOnInit() {
    this.logSub = this.timelogDataService.getLogs('/times').subscribe(
      data => this.logs = data
    );
  }

  showDetails(logItem) {
    this.log.emit(logItem);
  }

}
