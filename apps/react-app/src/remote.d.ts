// Types for the Angular remote exposed via Module Federation as `remote/mount`.
declare module 'remote/mount' {
  export interface RemoteHandle {
    destroy(): void
  }
  export function mount(el: HTMLElement): Promise<RemoteHandle>
}