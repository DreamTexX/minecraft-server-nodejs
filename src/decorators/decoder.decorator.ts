import { PacketManager, IDecoder } from '../packet-manager';

export function Decoder(name: string) {
  return function <T extends IDecoder>(constructor) {
    PacketManager.registerDecoder(name, constructor.prototype);
  };
}
