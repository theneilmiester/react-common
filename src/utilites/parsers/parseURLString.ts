import { URLObject } from './parser.types';

export const parseURLString = (object: URLObject) => {
  let string = object.url;
  const items = [];

  for (const key in object) {
    if (key !== 'url') {
      items.push(
        encodeURIComponent(key) + '=' + encodeURIComponent(object[key])
      );
    }
  }

  string = string + '?' + items.join('&');

  return string;
};
