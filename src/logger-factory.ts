import { Logger } from 'tslog';

export class LoggerFactory {
  private static logger: Logger;

  static getLogger(): Logger {
    if (!this.logger)
      this.logger = new Logger({
        minLevel: process.env.NODE_ENV === 'development' ? 'silly' : 'info',
        overwriteConsole: true,
        displayFilePath:
          process.env.NODE_ENV === 'development'
            ? 'hideNodeModulesOnly'
            : 'hidden',
        displayFunctionName: process.env.NODE_ENV === 'development',
      });
    return this.logger;
  }
}
