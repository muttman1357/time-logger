import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {CommonModule} from '@angular/common';
import {LogFormModule} from '../log-form/log-form.module';
import {TimeLogModule} from '../timelog/timelog.module';
import {DetailLogModule} from '../detail-log/detail-log.module';
import {MainRouting} from './main.routing';
import {CalModule} from '../cal/cal.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    LogFormModule,
    TimeLogModule,
    DetailLogModule,
    MainRouting,
    CalModule
  ],
  exports: [MainComponent],
  providers: []
})

export class MainModule {}
