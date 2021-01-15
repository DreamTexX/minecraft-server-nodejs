import { Packet } from '../decorators/packet.decorator';
import { Decode } from '../decorators/decode.decorator';

@Packet(0x00)
class TestPacket {
  @Decode('varint')
  packetSize: number;
}
