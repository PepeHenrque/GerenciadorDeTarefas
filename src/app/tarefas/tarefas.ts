import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-tarefas',
  imports: [FormsModule],
  templateUrl: './tarefas.html',
  styleUrl: './tarefas.css',
})
export class Tarefas {
  texto = signal('');
  tarefas = signal<Tarefa[]>([]);

  pendentes = computed(() => this.tarefas().filter((t) => !t.concluida).length);

  adicionar() {
    const titulo = this.texto().trim();
    if (!titulo) return;
    this.tarefas.update((lista) => [...lista, { id: Date.now() + Math.random(), titulo, concluida: false }]);
    this.texto.set('');
  }

  alternar(id: number) {
    this.tarefas.update((lista) =>
      lista.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t)),
    );
  }

  excluir(id: number) {
    this.tarefas.update((lista) => lista.filter((t) => t.id !== id));
  }
}
