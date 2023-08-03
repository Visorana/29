import { ArrayBufferConverter, getBuffer } from '../..';

describe('ArrayBufferConverter class tests', () => {
  let arrayBufferConverter;

  beforeEach(() => {
    arrayBufferConverter = new ArrayBufferConverter();
  });

  test('should load the buffer correctly', () => {
    const buffer = getBuffer();
    arrayBufferConverter.load(buffer);
    expect(arrayBufferConverter.buffer).toEqual(buffer);
  });

  test('should convert the buffer to a string correctly', () => {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const buffer = getBuffer();
    arrayBufferConverter.load(buffer);
    const result = arrayBufferConverter.toString();
    expect(result).toBe(data);
  });

  test('should throw an error when converting without loading', () => {
    expect(() => arrayBufferConverter.toString()).toThrowError('Buffer is not loaded. Call load(buffer) first.');
  });
});
