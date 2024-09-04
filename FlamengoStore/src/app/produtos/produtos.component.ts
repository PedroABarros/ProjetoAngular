import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {
  produtos = [
    { nome: 'Manto 1', descricao: 'Uniforme Jogo 1', link: 'https://razeimports.com/products/camisa-flamengo-home-24-25-s-n-torcedor-masculino-preto-e-vermelho?variant=48119346790684&currency=BRL&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=4&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBLgirf-Cv-5QvYx1CLa2ZUTRLV5NJFG_Hz_hdFe8sWVgfPiMM1DnygaAoW3EALw_wcB'},
    { nome: 'Manto 2', descricao: 'Uniforme jogo 2', link: 'https://www.netshoes.com.br/p/camisa-flamengo-ii-2425-sn-torcedor-adidas-masculina-branco-FB9-4232-014?campaign=gglepqpla&gad_source=4&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBIOm3dDUH2IIPRtTUd-1befTNg7Weaag7ZPfaUN4XzK3k-uemPNuxIaAo7XEALw_wcB&gclsrc=aw.ds'},
    { nome: 'Manto 3', descricao: 'Uniforme Jogo 3', link: 'https://www.netshoes.com.br/p/camisa-3-cr-flamengo-2324-adidas-preto-FB9-1717-006?campaign=gglepqpla&gad_source=4&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBLhQwD_FiwTz5wCtgTByjuT2JfNyeFIlvcjA4735HUeGblox7a-rQEaAlewEALw_wcB&gclsrc=aw.ds'},
    { nome: 'Moletom treino', descricao: 'Amarelinha Absurda!!!', link: 'https://www.netshoes.com.br/p/moletom-adidas-masculino-treino-atleta-flamengo-amarelo+preto-FB9-5380-274?campaign=gglepqpla&sellerId=12671&gad_source=4&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBLq1FirAQ9l5booCI-9z-9HgwISQ3ueJ1njEwvkPIAxGh6Cr8YyMt8aAuHAEALw_wcB&gclsrc=aw.ds'}
  ];
}
