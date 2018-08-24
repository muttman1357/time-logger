import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelogComponent} from './timelog.component';
import {TimelogDataService} from './services/timelog-data.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    TimelogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TimelogComponent
  ],
  providers: [TimelogDataService]
})

export class TimeLogModule {}
