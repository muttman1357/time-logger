import {NgModule} from '@angular/core';
import {SharedComponent} from './shared.component';
import {SharedService} from './services/shared.service';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedComponent
  ],

  providers: [SharedService]
})

export class SharedModule {}
