import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-input [contador]="addValue"></app-input>
    <br />
    <button (click)="add()">Adicionar</button>
    <br />
    <ng-template [ngIf]="getDados">
      <h1>{{ getDados.nome }}</h1>
      <h1>{{ getDados.idade }}</h1>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}
  public getDados: { nome: string; idade: number } | undefined;
  public addValue: number = 0;
  public add() {
    this.addValue++;
  }
  ngOnInit(): void {}

  public setDados(event: { nome: string; idade: number }) {
    this.getDados = event;
  }
}
