import {AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import {CalDataService} from './services/cal-data.service';
import {Subscription} from 'rxjs/Subscription';
import {SharedService} from '../shared/services/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'tl-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.scss']
})
export class CalComponent implements OnInit, OnDestroy, AfterViewInit {
  @Output() log = new EventEmitter<string>();
  calendarOptions: Options;
  events = [];
  private calSub: Subscription;
  private loadSub: Subscription;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(
    private calDataService: CalDataService,
    private sharedService: SharedService,
    private router: Router
  ) {}

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

  }

  ngAfterViewInit() {

    this.sharedService.eventLoader.subscribe(
      data => {
        if(data === true) {
          this.loadEvents();
        }
      }
    );
  }

  loadEvents() {
    this.loadSub = this.calDataService.getEvents('/times').subscribe(
      data => {
        this.calendarOptions.events = data;
        this.ucCalendar.renderEvents(this.calendarOptions.events);
      },
      error => console.log(error)
    );
  }

  eventMouseOver(e) {
    let ren = this.eventRender(e);
    let target = ren.detail.jsEvent.currentTarget;
    console.log(ren.detail.event.title);
    target.insertAdjacentHTML('afterbegin', '<div class="tl-popover">' + ren.detail.event.title + '<div class="arrow-down"></div></div>');
  }

  eventMouseOut(e) {
    let ren = this.eventRender(e);
    // let target = ren.detail.jsEvent.currentTarget;
    // let el = target.getElementById('popover');
    // debugger;
    // el.remove();
  }

  eventRender(e) {
    return e;
  }

  dayClick(e) {
    this.sharedService.addEvent(e);
    this.router.navigate(['/add']);
  }

  eventClick(e) {
    console.log(e);
    this.log.emit(e.event.key);
  }

  ngOnDestroy() {
    this.calSub.unsubscribe();
    if(this.loadSub) {
      this.loadSub.unsubscribe();
    }
  }

}
