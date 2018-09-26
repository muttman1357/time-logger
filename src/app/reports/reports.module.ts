import {NgModule} from '@angular/core';
import {ReportsComponent} from './reports.component';
import {CommonModule} from '@angular/common';
import {ReportsRouting} from './reports.routing';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRouting,
    SharedModule
  ],
  exports: [ReportsComponent],
  providers: []
})

export class ReportsModule {}
