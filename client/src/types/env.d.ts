declare namespace NodeJS {
  interface ProcessEnv {
    VITE_FRONTEND_URL: string;
    VITE_CLIENT_ID: string;
    VITE_BACKEND_URL: string;
  }
}