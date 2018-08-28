import {NgModule} from '@angular/core';
import {CalComponent} from './cal.component';
import {CommonModule} from '@angular/common';
import { FullCalendarModule } from 'ng-fullcalendar';
import {CalService} from './services/cal.service';
import {CalDataService} from './services/cal-data.service';

@NgModule({
  declarations: [
    CalComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule
  ],
  exports: [
    CalComponent
  ],
  providers: [CalService, CalDataService]
})

export class CalModule {}
