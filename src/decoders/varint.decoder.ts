import { IDecoder } from '../packet-manager';
import { Decoder } from '../decorators/decoder.decorator';

@Decoder('varint')
export class VarintDecoder implements IDecoder {
  decode(buffer: Buffer) {}
}
