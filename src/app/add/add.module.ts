import {NgModule} from '@angular/core';
import {AddComponent} from './add.component';
import {CommonModule} from '@angular/common';
import {LogFormModule} from '../log-form/log-form.module';
import {AddRouting} from './add.routing';

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    LogFormModule,
    AddRouting
  ],
  exports: [AddComponent],
  providers: []
})

export class AddModule {}

