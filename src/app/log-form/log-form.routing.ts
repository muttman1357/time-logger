import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogFormComponent} from './log-form.component';


let logFormRoutes: Routes = [
  {path: 'logForm', component: LogFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(logFormRoutes)],
  exports: [RouterModule]
})

export class LogFormRouting {}

