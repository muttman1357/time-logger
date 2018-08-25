import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UpdateComponent} from './update.component';


let updateRoutes: Routes = [
  {path: 'update', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(updateRoutes)],
  exports: [RouterModule]
})

export class UpdateRouting {}
