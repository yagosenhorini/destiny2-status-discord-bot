import { Collection } from 'discord.js';

declare module 'discord.js' {
  export interface Client {
    commands: Collection<any, any>;
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TWITTER_TOKEN: string;
      TWITTER_API_KEY: string;
      TWITTER_API_SECRET: string;
      TWITTER_ACCESS_TOKEN: string;
      TWITTER_ACCESS_TOKEN_SECRET: string;

      DISCORD_APP_ID: string;
      DISCORD_GUILD_ID: string;
      DISCORD_PUBLIC_KEY: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_CLIENT_SECRET: string;
      DISCORD_TOKEN: string;
    }
  }
}
