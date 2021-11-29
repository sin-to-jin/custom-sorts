const neSort = <T, K extends keyof T, N extends T[K]>(
  d: Array<T>,
  k: K,
  o: boolean,
  n: N
): Array<T> => {
  return d
    .slice()
    .sort((a, b) => ((a[k] ?? n) > (b[k] ?? n) ? (o ? 1 : -1) : o ? -1 : 1));
};

export { neSort };
