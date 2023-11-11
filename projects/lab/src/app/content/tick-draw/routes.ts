import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '4-dogs',
    title: '4 dogs',
    loadComponent: () =>
      import('./four-dogs/four-dogs.component').then(
        (mod) => mod.FourDogsComponent
      ),
  },
  {
    path: 'object-throwing',
    title: 'Object throwing',
    loadComponent: () =>
      import('./object-throwing/object-throwing.component').then(
        (mod) => mod.ObjectThrowingComponent
      ),
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: '4-dogs',
  },
  {
    path: '**',
    redirectTo: '4-dogs',
  },
];
