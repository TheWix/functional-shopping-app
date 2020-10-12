
export const get = <T, K extends keyof T>(k: K) => (obj: T) => O.fromNullable(obj[k]);