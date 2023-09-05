import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-diretivas-atributos></app-diretivas-atributos>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
