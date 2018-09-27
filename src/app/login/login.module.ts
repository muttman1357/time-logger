import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginRoutingModule} from './login.routing';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './services/authentication.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [AuthenticationService]
})

export class LoginModule {}
