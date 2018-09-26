import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {CommonModule} from '@angular/common';
import {TimeLogModule} from '../timelog/timelog.module';
import {DetailLogModule} from '../detail-log/detail-log.module';
import {MainRouting} from './main.routing';
import {CalModule} from '../cal/cal.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    TimeLogModule,
    DetailLogModule,
    MainRouting,
    CalModule,
    SharedModule
  ],
  exports: [MainComponent],
  providers: []
})

export class MainModule {}
