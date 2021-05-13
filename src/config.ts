export class Config {
  private static instance: Config;

  private constructor() {}

  public static get Instance(): Config {
    if (Config.instance == undefined) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  public get logLevel(): string {
    return process.env.logLevel ?? 'debug';
  }

  public get region(): string {
    if (process.env.EXAMPLE) {
      return process.env.EXAMPLE;
    }
    throw new Error('example is undefined');
  }
}
