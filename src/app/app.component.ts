import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-new-component></app-new-component>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
