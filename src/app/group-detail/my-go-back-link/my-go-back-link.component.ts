import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-go-back-link',
  templateUrl: './my-go-back-link.component.html',
  styleUrls: ['./my-go-back-link.component.scss'],
  standalone: true,
  imports: [RouterModule]
})
export class MyGoBackLinkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
