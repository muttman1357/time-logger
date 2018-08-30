import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {LogFormComponent} from './log-form.component';
import {LogFormDataService} from './services/log-form-data.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    LogFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    SharedModule
  ],
  exports: [
    LogFormComponent
  ],
  providers: [LogFormDataService]
})

export class LogFormModule {}
