import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'group-detail/:name', loadChildren: () => import('./group-detail/group-detail.module').then(f => f.GroupDetailModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
