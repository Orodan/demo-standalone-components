import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  groups: any[] = [];

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.groups = this.groupService.getGroups()
  }

}
