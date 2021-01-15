import { program } from 'commander';
import { bootstrap } from './main';
import { LoggerFactory } from './logger-factory';

program.version('0.0.1');
program
  .option(
    '-p, --port <number>',
    'Port the server should listen on',
    parseInt,
    25565,
  )
  .option('-h, --host <value>', 'Host the server should listen on', '0.0.0.0')
  .option(
    '--debug',
    'Runs the server in debug mode (more logging output)',
    false,
  );

program.parse(process.argv);
const options = program.opts();

if (options.debug) process.env.NODE_ENV = 'development';

bootstrap(options.host, options.port).catch((err) => {
  LoggerFactory.getLogger().fatal(err);
});
