
import { parse } from 'twemoji-parser';
export const emojiparser　= (a) => {
const obj = parse(a);
return obj.url;
}


