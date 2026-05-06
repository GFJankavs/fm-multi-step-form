import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressSidebar } from './progress-sidebar/progress-sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProgressSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('fm-multi-step-form');
}
