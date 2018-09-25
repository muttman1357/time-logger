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

  /**
   * Loads calendar events
   */
  loadEvents() {
    this.loadSub = this.calDataService.getEvents('/times').subscribe(
      data => {
        this.calendarOptions.events = data;
        this.ucCalendar.renderEvents(this.calendarOptions.events);
      },
      error => console.log(error)
    );
  }

  /**
   * Mouseover creates a tooltip and injects it
   * into the DOM on task hover.
   * @param the custom event
   */
  eventMouseOver(e) {
    let ren = this.eventRender(e);
    let target = ren.detail.jsEvent.currentTarget;
    target.insertAdjacentHTML('afterbegin', '<div class="tl-popover">' + ren.detail.event.title + '<div class="arrow-down"></div></div>');
  }

  /**
   * Removes the tooltip from the DOM.
   * @param e
   */
  eventMouseOut(e) {
    let ren = this.eventRender(e);
    let target = ren.detail.jsEvent.currentTarget;
    target.removeChild(target.firstElementChild);
  }

  /**
   * Renders the custom event. Helper method to mouse events.
   * @param the custom event
   * @returns the custom event
   */
  eventRender(e) {
    return e;
  }

  /**
   * If the calendar day is clicked will nav to add event for that day
   * @param the event
   */
  dayClick(e) {
    this.sharedService.addEvent(e);
    this.router.navigate(['/add']);
  }

  /**
   * Clicking on the event will open up a modal showing details of the event
   * @param e
   */
  eventClick(e) {
    this.log.emit(e.event.key);
  }

  ngOnDestroy() {
    this.calSub.unsubscribe();
    if(this.loadSub) {
      this.loadSub.unsubscribe();
    }
  }

}
