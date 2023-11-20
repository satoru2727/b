import { parse } from "twemoji-parser";
export const emojiparser = (a) => {
  const obj = parse(a);
  const objj = obj[0];
  return objj.url;
};
