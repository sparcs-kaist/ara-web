import camelCase from "camelcase";

type CamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${Lowercase<T>}${Capitalize<CamelCase<U>>}`
  : S;

type SnakeToCamel<T> =
  T extends Array<infer U>
    ? Array<SnakeToCamel<U>>
    : T extends object
      ? { [K in keyof T as CamelCase<string & K>]: SnakeToCamel<T[K]> }
      : T;

export const toCamelCase = <T>(obj: T): SnakeToCamel<T> => {
  if (Array.isArray(obj)) return obj.map((el) => toCamelCase(el)) as any;
  if (obj !== null && typeof obj === "object") {
    return Object.entries(obj).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [camelCase(key)]: toCamelCase(value),
      }),
      {}
    ) as any;
  }
  return obj as any;
};
