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
    <div class="buttons">
      <button [disabled]="!heroes.canAdd()" (click)="heroes.addInactive()">Add inactive hero</button>
      <button [disabled]="!heroes.canAdd()" (click)="heroes.addActive()">Add active hero</button>
      <button [disabled]="!heroes.canRemove()" (click)="heroes.remove()">Remove hero</button>
    </div>
    <ul>
        <li *ngFor="let hero of heroes" [@shrinkOut]="'in'">
          {{hero.name}}
        </li>
    </ul>    
    <ul>
        <li *ngFor="let hero of heroes" [@shrinkOut2]="'in'">
          {{hero.name}}
        </li>
    </ul>    
    <ul>
        <li *ngFor="let hero of heroes" [@shrinkOut3]="'in'">
          {{hero.name}}
        </li>
    </ul>    
    <ul>
        <li *ngFor="let hero of heroes" [@shrinkOut4]="'in'">
          {{hero.name}}
        </li>
    </ul>
    <ul>
        <li *ngFor="let hero of heroes" [@flyInOut]="'in'">
          {{hero.name}}
        </li>
    </ul>`,
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
      // transition('inactive => active', animate('500ms ease-in')),
      transition('inactive => active', [
        style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.3)'
        }),
        animate('2000ms ease-in', style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        }))
      ]),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
    trigger('shrinkOut', [
      state('in', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        animate('2s 2s ease-out', style({height: 0}))
      ])
    ]),
    trigger('shrinkOut2', [
      state('in', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        animate('2s 2s ease-in', style({height: 0}))
      ])
    ]),
    trigger('shrinkOut3', [
      state('in', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        animate('2s 2s', style({height: 0}))
      ])
    ]),
    trigger('shrinkOut4', [
      state('in', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        animate('2s 2s ease-in-out', style({height: 0}))
      ])
    ]),
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s 10 ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ],
  /*
  animations: [
    trigger('heroState', [
      state('inactive', style({transform: 'translateX(0) scale(1)'})),
      state('active',   style({transform: 'translateX(0) scale(1.1)'})),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => inactive', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate(100)
      ]),
      transition('inactive => void', [
        animate(100, style({transform: 'translateX(100%) scale(1)'}))
      ]),
      transition('void => active', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(200)
      ]),
      transition('active => void', [
        animate(200, style({transform: 'translateX(0) scale(0)'}))
      ])
    ])
  ],
  */
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