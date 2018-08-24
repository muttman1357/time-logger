import {NgModule} from '@angular/core';
import {DetailLogComponent} from './detail-log.component';
import {DetailLogDataService} from './services/detail-log-data.service';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [DetailLogComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [DetailLogComponent],
  providers: [DetailLogDataService]
})

export class DetailLogModule {}
