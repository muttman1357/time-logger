import {NgModule} from '@angular/core';
import {SharedComponent} from './shared.component';
import {SharedService} from './services/shared.service';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    SharedComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SharedComponent,
    NavComponent
  ],

  providers: [SharedService]
})

export class SharedModule {}
