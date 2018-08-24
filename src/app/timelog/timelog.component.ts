import {Component, OnDestroy, OnInit} from '@angular/core';
import {TimelogDataService} from './services/timelog-data.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {computeMsgId} from '@angular/compiler/src/i18n/digest';

@Component({
  selector: 'tl-timelog',
  templateUrl: './timelog.component.html',
  styleUrls: ['./timelog.component.scss']
})
export class TimelogComponent implements OnInit, OnDestroy {
  logs: Observable<any[]>;
  logSub: Subscription;
  constructor(private timelogDataService: TimelogDataService) { }

  ngOnInit() {
    this.logSub = this.timelogDataService.getLogs('/times').subscribe(
      data => {
        this.logs = data;
      },
      error => console.log(error)
    );
  }

  ngOnDestroy() {
    if(this.logSub) {
      this.logSub.unsubscribe();
    }
  }

}
