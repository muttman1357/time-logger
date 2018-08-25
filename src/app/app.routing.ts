import {Route, Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: MainComponent},
  // {path: '**', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRouting {}
