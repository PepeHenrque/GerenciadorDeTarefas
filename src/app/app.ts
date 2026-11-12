import { Component } from '@angular/core';
import { Tarefas } from './tarefas/tarefas';

@Component({
  selector: 'app-root',
  imports: [Tarefas],
  template: '<app-tarefas />',
})
export class App {}
