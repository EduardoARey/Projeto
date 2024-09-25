import { Component } from '@angular/core';

interface Tarefas {
  descricao: string;
  concluida: boolean
}

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css'
})
export class DiretivasComponent {
  isActive: boolean = true;
  Tarefa: Tarefas[] = [
    { descricao: 'Estudar Angular', concluida: false },
    { descricao: 'Fazer compras', concluida: true },
    { descricao: 'Limpar a casa', concluida: false },
    { descricao: 'Ler um livro', concluida: true },
    { descricao: 'Exercícios físicos', concluida: false }];

    alternarConclusao(tarefa: Tarefas) {
      tarefa.concluida = !tarefa.concluida;}
}
