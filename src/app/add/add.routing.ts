import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddComponent} from './add.component';

let addRoutes: Routes = [
  {path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(addRoutes)],
  exports: [RouterModule]
})

export class AddRouting {}
