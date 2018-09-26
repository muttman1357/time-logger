import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MainModule} from './main/main.module';
import {AppRouting} from './app.routing';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {UpdateModule} from './update/update.module';
import {ReportsModule} from './reports/reports.module';
import {AddModule} from './add/add.module';
import {LoginModule} from './login/login.module';
import { AlertComponent } from './_directives/alert/alert.component';
import {AlertService} from './_directives/alert/services/alert.service';
import {JwtInterceptor} from './auth/helpers/jwt.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserComponent } from './auth/services/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRouting,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    UpdateModule,
    ReportsModule,
    AddModule,
    LoginModule
  ],
  providers: [
    AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
