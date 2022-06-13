import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GroupDetailComponent } from './group-detail.component';
import { MyGoBackLinkComponent } from './my-go-back-link/my-go-back-link.component';

const routes = [
  { path: '', component: GroupDetailComponent }
]

@NgModule({
  declarations: [
    GroupDetailComponent,
    MyGoBackLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GroupDetailModule { }
