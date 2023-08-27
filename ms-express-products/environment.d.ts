declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      MONGO_LOGS_URI: string;
    }
  }
}

export {};
