import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginRoutingModule} from './login.routing';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent
  ],
  providers: []
})

export class LoginModule {}
