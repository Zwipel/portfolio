interface ImportMetaEnv {
  readonly VITE_BASE_URL?: string;
  readonly [key: string]: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}