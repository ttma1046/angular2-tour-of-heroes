import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { Heroes } from './hero.toggle.service';

@Component({
  moduleId: module.id,
  selector: 'hero-list-basic',
  /* The click event calls hero.toggleState(), which
   * causes the state of that hero to switch from
   * active to inactive or vice versa.
   */
  template: `
    <ul>
        <li *ngFor="let hero of heroes"
          [@heroState]="hero.state"
          (click)="hero.toggleState()">
        {{hero.name}}
      </li>
  </ul>
  `,
  styleUrls: ['hero-list.component.css'],
  /**
   * Define two states, "inactive" and "active", and the end
   * styles that apply whenever the element is in those states.
   * Then define animations for transitioning between the states,
   * one in each direction
   */
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ],
  providers: [Heroes]
})
export class HeroListBasicComponent {
    constructor(private heroes: Heroes) { }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/