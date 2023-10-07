import { Component } from '@angular/core';
import { JOGADORES } from 'src/app/shared/modelo/JOGADORES';
import { Jogador } from 'src/app/shared/modelo/jogador';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-mantem-jogador',
  templateUrl: './mantem-jogador.component.html',
  styleUrls: ['./mantem-jogador.component.css']
})
export class MantemJogadorComponent {


    jogadorDeManutencao: Jogador;
    estahCadastrando = true;
    nomeBotaoManutencao = 'Cadastrar';

    jogadores = JOGADORES;
    constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
      this.jogadorDeManutencao = new Jogador();
      const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
      if (idParaEdicao) {
        // editando
        const jogadorEncontrado = this.jogadores.find(
          jogador => jogador.nome === idParaEdicao);
        if (jogadorEncontrado) {
          this.estahCadastrando = false;
          this.nomeBotaoManutencao = 'Salvar';
          this.jogadorDeManutencao = jogadorEncontrado;
        }
      } else {
        this.nomeBotaoManutencao = 'Cadastrar';
      }
    }

    manter(): void {
      if (this.estahCadastrando && this.jogadorDeManutencao) {
        this.jogadores.push(this.jogadorDeManutencao);
      }
      this.jogadorDeManutencao = new Jogador();
      this.nomeBotaoManutencao = 'Cadastrar';
      this.roteador.navigate(['listagemjogadores']);
    }
}
