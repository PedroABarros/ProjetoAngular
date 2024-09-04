import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  featuredProducts = [
    {
      name: 'Manto 1 24/25',
      description: 'Uniforme Jogo 1'
    },
    {
      name: 'Camisa Oficial 24/25',
      description: 'Uniforme Jogo 2'
    },
    {
      name: 'Moletom treino',
      description: 'Amarelinha Absurda!!!'
    }
  ];
}
