import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  featuredProducts = [
    {
      name: 'Camisa Oficial 24/25',
      description: 'Camisa de Jogo 1'
    },
    {
      name: 'Camisa Oficial 24/25',
      description: 'Camisa de Jogo 2'
    },
    {
      name: 'Camisa Retrô Masculina',
      description: 'Flamengo Nike 2008-2009'
    }
  ];
}
