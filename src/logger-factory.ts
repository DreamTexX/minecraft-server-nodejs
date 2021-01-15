import { Logger } from 'tslog';

export class LoggerFactory {
  private static logger: Logger;

  static getLogger(): Logger {
    if (!this.logger)
      this.logger = new Logger({
        minLevel: process.env.NODE_ENV === 'production' ? 'info' : 'silly',
      });
    return this.logger;
  }
}
