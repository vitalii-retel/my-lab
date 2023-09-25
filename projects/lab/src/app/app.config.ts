import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(ROUTES, withHashLocation())],
};
