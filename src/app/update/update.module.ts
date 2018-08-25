import {NgModule} from '@angular/core';
import {UpdateComponent} from './update.component';
import {UpdateService} from './services/update.service';
import {CommonModule} from '@angular/common';
import {UpdateRouting} from './update.routing';

@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule,
    UpdateRouting
  ],
  exports: [UpdateComponent],
  providers: [UpdateService]
})

export class UpdateModule {}
