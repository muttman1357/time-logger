import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import {CalDataService} from './services/cal-data.service';
import {Subscription} from 'rxjs/Subscription';
import {SharedService} from '../shared/services/shared.service';

@Component({
  selector: 'tl-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.scss']
})
export class CalComponent implements OnInit, OnDestroy {
  @Output() log = new EventEmitter<string>();
  calendarOptions: Options;
  events = [];
  private calSub: Subscription;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(private calDataService: CalDataService, private sharedService: SharedService) {}

  ngOnInit() {
    this.calSub = this.calDataService.getEvents('/times').subscribe(
      data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        selectable: true,
        events: data
      };
      },
      error => console.log(error)
    );

    this.sharedService.eventLoader.subscribe(
      data => {
        if(data === true) {
          this.loadEvents();
        }
      }
    );

  }

  loadEvents() {
    this.calDataService.getEvents('/times').subscribe(
      data => {
        this.calendarOptions.events = data;
        this.ucCalendar.renderEvents(this.calendarOptions.events);
      },
      error => console.log(error)
    );
  }

  eventClick(e) {
    this.log.emit(e.event.key);
  }

  ngOnDestroy() {
    this.calSub.unsubscribe();
  }

}
