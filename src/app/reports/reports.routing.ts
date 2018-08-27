import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReportsComponent} from './reports.component';


let reportsRoutes: Routes = [
  {path: 'reports', component: ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(reportsRoutes)],
  exports: [RouterModule]
})

export class ReportsRouting {}

