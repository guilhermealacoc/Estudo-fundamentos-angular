import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="destruir"></app-title>
    <br />
    <button (click)="destruirComponent()">Destruir Component</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  public destruir: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {}
  ngOnDestroy(): void {}
  public destruirComponent() {
    this.destruir = false;
  }
}
