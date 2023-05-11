import { parseValue } from './parseValue';
import { ParseURLObjectOutput } from './parser.types';

export const parseURLObject = (url: string): ParseURLObjectOutput => {
  const split = url.split('?');

  const parts =
    typeof split === 'object' && split.length > 1
      ? {
          url: split[0],
          params: split[1].split('&'),
        }
      : null;

  const params = (() => {
    const results: any = {};

    (parts?.params || []).forEach(item => {
      const values = item.split('=') || [];
      if (typeof values === 'object' && values.length > 1) {
        results[values[0]] = parseValue(values[1]);
        console.log('test', results[values[0]], values[1])
      }
    });

    return results;
  })();

  return {
    url: parts?.url,
    ...params,
  };
};
