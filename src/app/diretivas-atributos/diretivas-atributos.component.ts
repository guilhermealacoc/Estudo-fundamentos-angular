import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public height: string = '20px';
  public color: string = 'grey';
  public nome: string = '';
  public list: Array<{ nome: string }> = [{ nome: 'teste' }];

  ngOnInit(): void {
    setInterval(() => {
      if (this.valor) {
        this.valor = false;
      } else {
        this.valor = true;
      }

      this.height = this.height == '20px' ? '50px' : '20px';
    }, 2000);
  }

  public salvar() {
    this.list.push({ nome: this.nome });
    this.nome = '';
  }
}
