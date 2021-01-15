import { IPacket, PacketManager } from '../packet-manager';

export function Packet(packetId) {
  return function <T extends IPacket>(constructor) {
    PacketManager.registerPacket(packetId, constructor.prototype);
  };
}
