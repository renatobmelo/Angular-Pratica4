import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemJogadoresComponent } from './listagem-jogadores/listagem-jogadores.component';
import { MantemJogadorComponent } from './mantem-jogador/mantem-jogador.component';

@NgModule({
  declarations: [
  
    ListagemJogadoresComponent,
       MantemJogadorComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
  ]
})



export class JogadorModule { }
