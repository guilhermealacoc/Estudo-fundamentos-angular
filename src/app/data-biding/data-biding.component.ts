import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent implements OnInit {
  public nome: string = 'Guilherme';
  public idade: number = 23;
  public checkedDisabled: boolean = false;
  public imgSrc: string =
    'https://img.freepik.com/fotos-gratis/uma-imagem-de-um-planeta-com-um-buraco-negro-no-centro-e-um-buraco-negro-no-centro_1340-23795.jpg';
  public imgTitle: string = 'Imagem Property Binding';
  public position: { x: number; y: number } = { x: 0, y: 0 };

  constructor() {}

  ngOnInit(): void {}

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public meuMouseMove(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
