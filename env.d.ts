/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SUPABASE_URL: string;
    readonly VITE_SUPABASE_ANON_KEY: string;
    // otras variables si las necesitas
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
