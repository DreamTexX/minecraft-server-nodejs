import 'reflect-metadata';

export const DECODE_META_KEY = Symbol('decode_key');

export function Decode(name: string) {
  return Reflect.metadata(DECODE_META_KEY, name);
}
