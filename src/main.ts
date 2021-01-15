import { Server, Socket } from 'net';
import { PacketManager } from './packet-manager';
import { Logger } from 'tslog';
import path from 'path';
import { LoggerFactory } from './logger-factory';

const logger: Logger = LoggerFactory.getLogger();

async function bootstrap(): Promise<number> {
  logger.info('Loading base information');
  await PacketManager.load([
    path.join(__dirname, 'decoders', '*.decoder.{js,ts}'),
    path.join(__dirname, 'packets', '*.packet.{js,ts}'),
  ]);

  logger.debug(`Loaded ${PacketManager.decoder.size} decoders`);
  logger.debug(`Loaded ${PacketManager.packets.size} packets`);

  const server = new Server();
  server.on('connection', (socket: Socket) => {
    socket.on('data', (data: Buffer) => {});
  });
  server.listen(25565, '0.0.0.0');
  return 0;
}

bootstrap()
  .then((code) => {
    logger.info(`Started with code ${code}`);
  })
  .catch((err) => {
    logger.error(err);
  });
