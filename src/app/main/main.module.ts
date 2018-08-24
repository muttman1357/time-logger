import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {DetailLogComponent} from '../detail-log/detail-log.component';
import {CalComponent} from '../cal/cal.component';
import {CommonModule} from '@angular/common';
import {LogFormModule} from '../log-form/log-form.module';
import {TimeLogModule} from '../timelog/timelog.module';

@NgModule({
  declarations: [
    MainComponent,
    CalComponent,
    DetailLogComponent
  ],
  imports: [
    CommonModule,
    LogFormModule,
    TimeLogModule
  ],
  exports: [MainComponent],
  providers: []
})

export class MainModule {}
