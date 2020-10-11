import * as _R from "ramda";
import * as _O from "fp-ts/Option";
import * as _E from "fp-ts/Either";
import * as _A from "fp-ts/Array";
import * as _TE from "fp-ts/TaskEither";
import { pipe as _pipe } from "fp-ts/pipeable";
import { constant as _constant, flow as _flow } from "fp-ts/function";

import type { Option as _Option } from "fp-ts/Option";
declare global {
  const R: typeof _R;
  const O: typeof _O;
  const E: typeof _E;
  const A: typeof _A;
  const TE: typeof _TE;

  const pipe: typeof _pipe;
  const constant: typeof _constant;
  const flow: typeof _flow;

  export type Either<L, R> = _E.Either<L, R>;
  export type Option<T> = _O.Option<T>;
}

declare module "typesafe-actions" {
  export type RootAction = any;
}

// Global scope augmentation
//eslint-disable-next-line no-var
var window: any = window || null;
const _global = (window || global) as any;
_global.pipe = _pipe;
_global.O = _O;
_global.R = _R;
_global.E = _E;
_global.A = _A;
_global.TE = _TE;
_global.constant = _constant;
_global.flow = _flow;
