export const splitStrings = (modules, inputs) => {
  const strings = [];
  const remainder = modules % inputs;
  for (let i = 0; i < inputs; i++) {
    strings.push(Math.floor(modules / inputs));
  }
  for (let i = 0; i < remainder; i++) {
    strings[i] = strings[i] + 1;
  }

  return strings;
};
