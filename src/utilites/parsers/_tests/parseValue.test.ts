import { parseValue } from '..';

describe('parseValue tests', () => {
  it('should return the value as a number', () => {
    const value = 33.3;
    const result = parseValue(value);
    const type = typeof result;
    expect(result).toEqual(value);
    expect(type).toEqual('number');
  });

  it('should return the value as a boolean when value is false', () => {
    const value = false;
    const result = parseValue(value);
    const type = typeof result;
    expect(result).toEqual(value);
    expect(type).toEqual('boolean');
  });

  it('should return the value as a boolean when value is true', () => {
    const value = true;
    const result = parseValue(value);
    const type = typeof result;
    expect(result).toEqual(value);
    expect(type).toEqual('boolean');
  });

  it('should return the value as a string', () => {
    const value = 'test string';
    const result = parseValue(value);
    const type = typeof result;
    expect(result).toEqual(value);
    expect(type).toEqual('string');
  });
});
