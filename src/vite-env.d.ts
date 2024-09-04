/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface ImpoertMetaEnv {
  readonly MODE: string
  // readonly VITE_BASE_URL: string
  // readonly VITE_TIME_OUT: number
}

declare interface ImpoertMeta {
  readonly env: ImpoertMetaEnv
}
