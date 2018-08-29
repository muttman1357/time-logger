import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import {CalDataService} from './services/cal-data.service';

@Component({
  selector: 'tl-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.scss']
})
export class CalComponent implements OnInit {
  @Output() log = new EventEmitter<string>();
  calendarOptions: Options;
  events = [];

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(private calDataService: CalDataService) {}

  ngOnInit() {
    this.calDataService.getEvents('/times').subscribe(
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
    });
  }
  clearEvents() {
    this.events = [];
  }
  loadEvents() {
    this.calDataService.getEvents('/times').subscribe(data => {
      this.events = data;
      console.log(this.events);
    });
  }



  clickButton(e) {
    console.log(e, 'clickButton clicked!!');
  }

  updateEvent(e) {
    console.log(e, 'updateevent clicked!!');
  }

  eventClick(e) {
    this.log.emit(e.event.key);
  }

}
