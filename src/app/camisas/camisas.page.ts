import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camisas',
  templateUrl: './camisas.page.html',
  styleUrls: ['./camisas.page.scss'],
})
export class CamisasPage implements OnInit {

  listaProdutos = [
    {
      nome: "Camisa Santos F.C 2011",
      descricao: "Masculina, Cor: Azul, Tamanho: M",
      valor: 169,
      png: "https://static.netshoes.com.br/produtos/camisa-nike-santos-iii-1213-sn-centenario/08/123-5209-108/123-5209-108_zoom1.jpg?ts=1538172782&ims=544x"
    },

    {
      nome: "Camisa Santos F.C & Charlie Brown JR 2022",
      descricao: "Masculina, Cor: Preta, Tamanho: G",
      valor: 134,
      png: "https://static.netshoes.com.br/produtos/camisa-santos-charlie-brown-jr-marginal-alado-umbro-masculina/06/2IA-3475-006/2IA-3475-006_zoom1.jpg?ts=1655812367&ims=544x"
    },

    {
      nome: "Camisa Santos F.C 2022",
      descricao: "Feminina, Cor: Rosa, Tamanho: P",
      valor: 139,
      png: "https://static.netshoes.com.br/produtos/camisa-santos-outubro-rosa-2223-sn-torcedor-umbro-feminina/18/2IA-3931-018/2IA-3931-018_zoom1.jpg?ts=1664838075&ims=544x"
    },

    {
      nome: "Camisa Santos F.C Treino 2023",
      descricao: "Masculina, Cor: Preto e Branco, Tamanho: M",
      valor: 180,
      png: "https://static.netshoes.com.br/produtos/camisa-santos-2324-sn-treino-umbro-masculina/58/2IA-5085-058/2IA-5085-058_zoom1.jpg?ts=1681336895&ims=544x"
    },
  ]



  constructor() { }

  ngOnInit() {
  }

}
