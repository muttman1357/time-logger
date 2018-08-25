import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {CalComponent} from '../cal/cal.component';
import {CommonModule} from '@angular/common';
import {LogFormModule} from '../log-form/log-form.module';
import {TimeLogModule} from '../timelog/timelog.module';
import {DetailLogModule} from '../detail-log/detail-log.module';
import {MainRouting} from './main.routing';

@NgModule({
  declarations: [
    MainComponent,
    CalComponent
  ],
  imports: [
    CommonModule,
    LogFormModule,
    TimeLogModule,
    DetailLogModule,
    MainRouting
  ],
  exports: [MainComponent],
  providers: []
})

export class MainModule {}
