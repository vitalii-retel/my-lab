import { Routes } from '@angular/router';

export const ROUTES: Routes = [
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
    loadChildren: () =>
      import('./content/tick-draw/routes').then((mod) => mod.ROUTES),
  },
  {
    path: 'notes',
    title: 'Notes',
    loadChildren: () =>
      import('./content/notes/routes').then((mod) => mod.ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
    // TODO implement not found page
  },
];
