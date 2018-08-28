import {Component, OnInit, ViewChild} from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import {CalDataService} from './services/cal-data.service';

@Component({
  selector: 'tl-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.scss']
})
export class CalComponent implements OnInit {
  calendarOptions: Options;
  events = [];

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  data = {
      title: 'New event',
      start: '2018-08-07',
      end: '2018-08-07'
  };
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
        events: data,
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



  clickButton() {
    console.log('clickButton clicked!!');
  }

  updateEvent() {
    console.log('updateevent clicked!!');
  }

  eventClick() {
    console.log('event clicked!!');
  }

}
