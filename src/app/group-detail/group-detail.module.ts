import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GroupDetailComponent } from './group-detail.component';

const routes = [
  { path: '', component: GroupDetailComponent }
]

@NgModule({
  declarations: [
    GroupDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GroupDetailModule { }
