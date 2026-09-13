import { createComponent } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import './styles.css';

/** Handle returned to the host application for controlling the mounted remote. */
export interface RemoteHandle {
  destroy(): void;
}

/**
 * Mounts the Angular application into the given host element.
 * Contract exposed via Module Federation as `remote/mount`.
 */
export async function mount(host: HTMLElement): Promise<RemoteHandle> {
  const appRef = await createApplication(appConfig);
  const componentRef = createComponent(App, {
    environmentInjector: appRef.injector,
    hostElement: host,
  });
  appRef.attachView(componentRef.hostView);

  return {
    destroy: () => {
      componentRef.destroy();
      appRef.destroy();
    },
  };
}