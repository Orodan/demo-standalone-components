import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterModule,
    CommonModule
  ]
})
export class HomeComponent implements OnInit {
  groups: any[] = [];

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.groups = this.groupService.getGroups()
  }

}
