import { parseURLObject } from '..';

describe('parseURLObject tests', () => {
  it('should return the url', () => {
    const { url } = parseURLObject(
      'http://www.test-heaven.com?str=testing&number=33.3&boolean=false'
    );
    expect(url).toEqual('http://www.test-heaven.com');
  });

  it('should return the parameters', () => {
    const { url, ...params } = parseURLObject(
      'http://www.test-heaven.com?str=testing&number=33.3&boolean=false'
    );
    expect(JSON.stringify(params)).toEqual(
      JSON.stringify({
        str: 'testing',
        number: 33.3,
        boolean: false,
      })
    );
  });
});
