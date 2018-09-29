import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {AuthGuard} from '../auth/_guards/auth.guard';


let mainRoutes: Routes = [
  {path: 'main', component: MainComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})

export class MainRouting {}
