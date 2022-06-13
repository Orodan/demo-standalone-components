import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groups = [
    {
      name: 'Deftones',
      image: './assets/deftones.webp',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      name: 'Ghost',
      image: './assets/ghost.jpeg',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      name: 'Gojira',
      image: './assets/gojira.jpeg',
      description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]

  constructor() { }

  getGroups() {
    return this.groups;
  }

  getGroup(name: string) {
    return this.groups.find(group => group.name === name)
  }
}
