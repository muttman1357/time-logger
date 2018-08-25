import {NgModule} from '@angular/core';
import {UpdateComponent} from './update.component';
import {UpdateService} from './services/update.service';
import {CommonModule} from '@angular/common';
import {UpdateRouting} from './update.routing';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UpdateDataService} from './services/update-data.service';

@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule,
    UpdateRouting,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [UpdateComponent],
  providers: [UpdateService, UpdateDataService]
})

export class UpdateModule {}
