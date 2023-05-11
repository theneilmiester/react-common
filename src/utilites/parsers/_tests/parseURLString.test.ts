import { parseURLString } from '..';

describe('parseURLString tests', () => {
  it('should return URL string', () => {
    const properties = {
      url: 'http://www.test.com',
      test: 1,
      str: 'testing',
      flag: true,
    };
    const propertiesUrlString = parseURLString(properties);
    expect(propertiesUrlString).toEqual(
      'http://www.test.com?test=1&str=testing&flag=true'
    );
  });
});
