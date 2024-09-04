import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  featuredProducts = [
    {
      name: 'Camisa Oficial',
      description: 'Uniforme Mandante'
    },
    {
      name: 'Camisa Oficial',
      description: 'Uniforme Visitante'
    },
    {
      name: 'Jaqueta Flamengo',
      description: 'Jaqueta Viagem'
    }
  ];
}
