import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {
  group: any;

  constructor(private route: ActivatedRoute, private groupService: GroupService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => params['name']),
      map(groupName => this.groupService.getGroup(groupName))
    )
    .subscribe(group => this.group = group)
  }

}
