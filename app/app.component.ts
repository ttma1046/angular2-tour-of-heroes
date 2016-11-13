import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h1>My First Attribute Directive</h1>
    <div>
      <input type="radio" name="colors" (click)="color='lightgreen'">Green
      <input type="radio" name="colors" (click)="color='yellow'">Yellow
      <input type="radio" name="colors" (click)="color='cyan'">Cyan
    </div>
    <div>
      <input type="radio" name="defaultcolors" (click)="defaultColor='lightblue'">lightblue
      <input type="radio" name="defaultcolors" (click)="defaultColor='violet'">violet
      <input type="radio" name="defaultcolors" (click)="defaultColor='pink'">pink
    </div>
    <p [myHighlight]="color" [defaultColor]="defaultColor">Highlight me!</p>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/heroeslist" routerLinkActive="active">Heroes List</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
