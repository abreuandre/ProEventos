import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Eventos } from './eventos/eventos';
import { Palestrantes } from './palestrantes/palestrantes';

@Component({
  imports: [RouterOutlet, Eventos, Palestrantes],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ProEventos-App');
}
