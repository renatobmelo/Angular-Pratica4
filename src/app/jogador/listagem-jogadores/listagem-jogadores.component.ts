import { Component } from '@angular/core';
import {Jogador} from '../../shared/modelo/jogador';
import { JOGADORES } from './../../shared/modelo/JOGADORES';

@Component({
  selector: 'app-listagem-jogadores',
  templateUrl: './listagem-jogadores.component.html',
  styleUrls: ['./listagem-jogadores.component.css']
})

export class ListagemJogadoresComponent {
  jogadores = JOGADORES;
  excluir(jogadorARemover: Jogador): void {
    const indx = this.jogadores.findIndex(jogador =>
      jogador.nome === jogadorARemover.nome);

    this.jogadores.splice(indx, 1);
  }
}
