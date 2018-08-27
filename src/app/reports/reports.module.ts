import {NgModule} from '@angular/core';
import {ReportsComponent} from './reports.component';
import {CommonModule} from '@angular/common';
import {ReportsRouting} from './reports.routing';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRouting
  ],
  exports: [ReportsComponent],
  providers: []
})

export class ReportsModule {}
