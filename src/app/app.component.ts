import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-input [contador]="addValue"></app-input>
    <br />
    <button (click)="add()">Adicionar</button>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}
  public addValue: number = 0;
  public add() {
    this.addValue++;
  }
  ngOnInit(): void {}
}
