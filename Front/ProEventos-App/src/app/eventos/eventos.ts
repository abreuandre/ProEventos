import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-eventos',
  styleUrl: './eventos.scss',
  templateUrl: './eventos.html',
})
export class Eventos {

  public eventos: any = [
    {
    Tema: 'Angular 11',
    Local: 'Belo Horizonte'
  },
  {
    Tema: '.NET 5',
    Local: 'São Paulo'
  },
  {
    Tema: 'Angular e Suas Novidades',
    Local: 'Rio de Janeiro'
  }
]


}
