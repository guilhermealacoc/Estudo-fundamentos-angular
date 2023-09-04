import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-diretivas-estruturais></app-diretivas-estruturais>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
