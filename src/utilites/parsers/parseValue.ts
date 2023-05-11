export const parseValue = (value: any) => {
  let result = null;

  const isNumber = () => (!isNaN(parseFloat(value)) ? true : false);
  const isBoolean = () =>
    value === 'true' || value === 'false' ? true : false;

  if (isNumber()) result = Number(value);
  else if (isBoolean())
    result = String(value).toLowerCase() === 'true' ? true : false;
  else result = value;

  return result;
};
