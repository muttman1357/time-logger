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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRouting,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    UpdateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
