import {Route, Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth/_guards/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  // {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRouting {}
