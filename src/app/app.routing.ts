import {Route, Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {NgModule} from '@angular/core';

const indexRoute: Route = {
  path: '',
  component: MainComponent
};

const fallbackRoute: Route = {
  path: '**',
  component: MainComponent
};

const routes: Routes = [
  indexRoute,
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRouting {}
