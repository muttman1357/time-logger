import {Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange} from '@angular/core';
import {SharedService} from '../shared/services/shared.service';
import {Subscription} from 'rxjs/Subscription';
import {DetailLogDataService} from './services/detail-log-data.service';

@Component({
  selector: 'tl-detail-log',
  templateUrl: './detail-log.component.html',
  styleUrls: ['./detail-log.component.scss']
})
export class DetailLogComponent implements OnChanges, OnDestroy {
  @Input() logId;
  log: object;
  private sub: Subscription;

  constructor(
    private detailLogDataService: DetailLogDataService,
    private sharedService: SharedService
  ) { }


  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(changes.logId.currentValue) {
      let logId = changes.logId.currentValue;
      this.sub = this.detailLogDataService.getLogById('/times', logId).subscribe(
        data => this.log = data,
        error => console.log(error)
      );
    }
  }

  deleteLog() {
    this.detailLogDataService.deleteLogById('/times', this.logId);
    this.sharedService.reLoadEvents();
  }

  ngOnDestroy() {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

}
