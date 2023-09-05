import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent {
  public condition: boolean = true;
  public conditionClick: boolean = false;
  public list: Array<{ nome: string }> = [
    { nome: 'Guilherme Alacoc' },
    { nome: 'Joao da Silva' },
    { nome: 'Maria da Silva' },
    { nome: 'Jose da Silva' },
    { nome: 'Pedro da Silva' },
  ];
  public nome: String = 'Alacoc';

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.list.push({ nome: 'Novo nome' });
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1);
  }
}
