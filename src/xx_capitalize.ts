export default undefined;

type CHAR_MAP = {
  a: "A";
  b: "B";
  c: "C";
  d: "D";
  e: "E";
  f: "F";
  g: "G";
  h: "H";
  i: "I";
  j: "J";
  k: "K";
  l: "L";
  m: "M";
  n: "N";
  o: "O";
  p: "P";
  q: "Q";
  r: "R";
  s: "S";
  t: "T";
  u: "U";
  v: "V";
  w: "W";
  x: "X";
  y: "Y";
  z: "Z";
};

type MyCapitalize<STRING extends string> =
  STRING extends `${infer FIRST_CHAR}${infer REST}`
    ? FIRST_CHAR extends keyof CHAR_MAP
      ? `${CHAR_MAP[FIRST_CHAR]}${REST}`
      : STRING
    : STRING;

type GetPost = MyCapitalize<"getPost">; // "GetPost"

type HookFunction<S extends string> = `use${MyCapitalize<S>}`;

type UseGetPost = HookFunction<"getPost">; // "useGetPost"

const x: GetPost = "GetPost";
const z: UseGetPost = "useGetPost";
