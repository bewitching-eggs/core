/**
 * Represents a type that can be either `null` or another type.  Useful for representing optional values that might be absent.
 *
 * @template T The type that can be combined with `null`.
 *
 * @example
 * type Result = {
 *   result: NullOr<{ id: string }>;
 *   error: NullOr<string>;
 * };
 */
export type NullOr<T> = null | T;

/**
 * Represents an optional value of type `T`.  The value can be `T`, `null`, or `undefined`.  Useful for representing properties that may be absent.
 *
 * @template T The type of the value when it exists.
 * @example
 * type User = {
 *   name: string;
 *   age: ValueOrNotExist<number>; // Age might not be provided
 * };
 */
export type ValueOrNotExist<T> = null | undefined | T;

/**
 * Extracts keys from type `T`. This utility type works correctly for single object types. If `T` is a union type, the result will be a union of keys from all members of the union. This may or may not be the intended behavior.  Consider using a more robust approach for handling unions.
 *
 * @template T The input type.
 * @example
 * type MyObject = { a: number; b: string };
 * type Keys = KeysOfUnion<MyObject>; // Keys will be "a" | "b"
 *
 * type MyUnion = { a: number } | { b: string; c: boolean };
 * type Keys = KeysOfUnion<MyUnion>; // Keys will be "a" | "b" | "c"
 */
export type KeysOfUnion<T> = T extends T ? keyof T : never;
