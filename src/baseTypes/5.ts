/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number;
type Literal = "enable" | "disable";
let literal: Literal = "enable";
literal = "disable";

type User = {
  [key: string]: number | string;
};
const sd: User = {
  one: "one",
  two: "sad",
};
const asd: User = {
  one: "one",
  as: 2,
};
