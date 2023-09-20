import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Guilherme', idade: 23 },
    { nome: 'Alacoc', idade: 23 },
    { nome: 'Aquino', idade: 23 },
  ];
  constructor() {}
  ngOnInit(): void {}
  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }
}

/*
O funcionamento da primeira parte consiste em:
1) Gerar a lista
2) Percorrer a lista atribuindo o index ao i
3) Criar um metodo que recebe o index e emite o objeto da lista
*/
