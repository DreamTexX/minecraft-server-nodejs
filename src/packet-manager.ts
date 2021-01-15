import { glob } from 'glob';
import { Logger } from 'tslog';
import { LoggerFactory } from './logger-factory';

export interface IPacket {}

export interface IDecoder {
  decode(buffer: Buffer);
}

export class PacketManager {
  private static logger: Logger = LoggerFactory.getLogger();
  public static packets: Map<number, IPacket> = new Map<number, IPacket>();
  public static decoder: Map<string, IDecoder> = new Map<string, IDecoder>();

  public static registerPacket(id: number, packet: IPacket) {
    this.packets.set(id, packet);
    this.logger.debug(
      `Packet 0x${id.toString(16).toUpperCase().padStart(2, '0')} registered`,
    );
  }

  public static registerDecoder(name: string, decoder: IDecoder) {
    this.decoder.set(name, decoder);
    this.logger.debug(`Decoder '${name}' registered`);
  }

  public static async load(paths: string[]) {
    let files: string[] = [];
    paths.forEach((path) => (files = files.concat(glob.sync(path))));
    for (let file of files) {
      await import(file);
    }
  }
}
