import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Lab',
    pathMatch: 'full',
    loadComponent: () =>
      import('./content/welcome/welcome.component').then(
        (mod) => mod.WelcomeComponent
      ),
  },
  {
    path: 'tick-draw',
    title: 'Tick draw',
    loadComponent: () =>
      import('./content/tick-draw/tick-draw.component').then(
        (mod) => mod.TickDrawComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./content/welcome/welcome.component').then(
        (mod) => mod.WelcomeComponent
      ),
  },
];
