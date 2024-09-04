import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {
  produtos = [
    { nome: 'Produto 1', descricao: 'Descrição do Produto 1', preco: 99.99 },
    { nome: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 149.99 },
    { nome: 'Produto 3', descricao: 'Descrição do Produto 3', preco: 199.99 }
  ];
}
