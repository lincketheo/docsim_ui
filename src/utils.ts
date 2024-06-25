import {Result, Ok, Err} from "./result"

export function assertNotNull<T>(value: T | null | undefined): Result<T, void> {
  if (value === null || value === undefined) {
    return Err<void>(undefined);
  }
  return Ok<T>(value);
}

