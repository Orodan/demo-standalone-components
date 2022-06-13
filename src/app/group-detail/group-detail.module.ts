import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

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
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule
  ]
})
export class GroupDetailModule { }
