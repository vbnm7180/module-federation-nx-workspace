import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withDisabledInitialNavigation } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Initial navigation is disabled so the embedded remote does not touch the
    // host application URL/history. No-op for standalone use (routes are empty).
    provideRouter(routes, withDisabledInitialNavigation())
  ]
};