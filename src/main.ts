import { Server, Socket } from 'net';
import { PacketManager } from './packet-manager';
import { Logger } from 'tslog';
import path from 'path';
import { LoggerFactory } from './logger-factory';

const logger: Logger = LoggerFactory.getLogger();

export async function bootstrap(hostname: string, port: number) {
  logger.info('Loading base information');

  await PacketManager.load([
    path.join(__dirname, 'decoders', '*.decoder.js'),
    path.join(__dirname, 'packets', '*.packet.js'),
  ]);

  logger.debug(`Loaded ${PacketManager.decoder.size} decoders`);
  logger.debug(`Loaded ${PacketManager.packets.size} packets`);

  const server = new Server();
  server.on('connection', (socket: Socket) => {
    socket.on('data', () => {});
  });
  server.listen(port, hostname, () => logger.info('Server started'));
}
