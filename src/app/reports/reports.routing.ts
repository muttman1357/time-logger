import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReportsComponent} from './reports.component';
import {AuthGuard} from '../auth/_guards/auth.guard';


let reportsRoutes: Routes = [
  {path: 'reports', component: ReportsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(reportsRoutes)],
  exports: [RouterModule]
})

export class ReportsRouting {}

