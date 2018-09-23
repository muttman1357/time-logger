import {Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChange} from '@angular/core';
import {SharedService} from '../shared/services/shared.service';
import {Subscription} from 'rxjs/Subscription';
import {DetailLogDataService} from './services/detail-log-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'tl-detail-log',
  templateUrl: './detail-log.component.html',
  styleUrls: ['./detail-log.component.scss']
})
export class DetailLogComponent implements OnChanges, OnDestroy {
  @Input() logId;
  @Output() resetLog = new EventEmitter<string>();
  log: object;
  showLog = false;
  private sub: Subscription;

  constructor(
    private detailLogDataService: DetailLogDataService,
    private sharedService: SharedService,
    private router: Router,
  ) { }


  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(changes.logId.currentValue) {
      let logId = changes.logId.currentValue;
      this.sub = this.detailLogDataService.getLogById('/times', logId).subscribe(
        data => {
          this.log = data;
          this.showLog = true;
        },
        error => console.log(error)
      );
    }
  }

  closeLog() {
    this.showLog = false;
  }

  updateLog() {
    this.router.navigate(['/update', this.logId]);
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
