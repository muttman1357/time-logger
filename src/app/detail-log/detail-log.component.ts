import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange} from '@angular/core';
import {SharedService} from '../shared/services/shared.service';
import {Subscription} from 'rxjs/Subscription';
import {DetailLogDataService} from './services/detail-log-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'tl-detail-log',
  templateUrl: './detail-log.component.html',
  styleUrls: ['./detail-log.component.scss']
})
export class DetailLogComponent implements OnChanges, OnDestroy, OnInit {
  @Input() logId;
  @Output() resetLog = new EventEmitter<string>();
  log: object;
  private sub: Subscription;
  private sub2: Subscription;

  constructor(
    private detailLogDataService: DetailLogDataService,
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.logId) {
      this.sub2 = this.detailLogDataService.getLogById('/times', this.logId).subscribe(
        data => {
          this.log = data;
        },
        error => console.log(error)
      );
    }
  }


  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(changes.logId.currentValue) {
      let logId = changes.logId.currentValue;
      this.sub = this.detailLogDataService.getLogById('/times', logId).subscribe(
        data => {
          this.log = data;
        },
        error => console.log(error)
      );
    }
  }

  closeLog() {
    this.resetLog.emit();
  }

  updateLog() {
    this.router.navigate(['/update', this.logId]);
  }

  deleteLog() {
    this.detailLogDataService.deleteLogById('/times', this.logId);
    this.sharedService.reLoadEvents();
    this.closeLog();
  }



  ngOnDestroy() {
    if(this.sub) {
      this.sub.unsubscribe();
    }
    if(this.sub2) {
      this.sub2.unsubscribe();
    }
  }

}
