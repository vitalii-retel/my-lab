import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'git',
  },
  {
    path: 'git',
    title: 'Git notes',
    loadComponent: () =>
      import('./git/git.component').then((mod) => mod.GitComponent),
  },
  {
    path: '**',
    redirectTo: 'git',
  },
];
