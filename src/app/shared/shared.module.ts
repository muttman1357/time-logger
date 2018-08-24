import {NgModule} from '@angular/core';
import {SharedComponent} from './shared.component';
import {SharedService} from './services/shared.service';
import {CommonModule} from '@angular/common';
import {OrderBy} from './pipes/orderby.pipe';

@NgModule({
  declarations: [
    SharedComponent,
    OrderBy
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SharedComponent,
    OrderBy
  ],

  providers: [SharedService]
})

export class SharedModule {}
