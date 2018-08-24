import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelogComponent} from './timelog.component';
import {TimelogDataService} from './services/timelog-data.service';

@NgModule({
  declarations: [
    TimelogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimelogComponent
  ],
  providers: [TimelogDataService]
})

export class TimeLogModule {}
