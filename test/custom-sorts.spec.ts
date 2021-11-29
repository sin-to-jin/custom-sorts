import { neSort } from '../src/custom-sorts';

describe('custom-sorts', () => {
  const base = [{ a: 10 }, {}, { a: 5 }, { a: 20 }, { a: 8 }, {}];
  describe('neSort', () => {
    const stub = (isAsk: boolean, isMin: boolean) =>
      neSort(base, 'a', isAsk, isMin ? Number.MIN_VALUE : Number.MAX_VALUE);
    test('Sort min->max, undefined is MIN', () => {
      expect(stub(false, true)).toEqual([
        { a: 20 },
        { a: 10 },
        { a: 8 },
        { a: 5 },
        {},
        {},
      ]);
    });
    test('Sort min->max, undefined is MAX', () => {
      expect(stub(false, false)).toEqual([
        {},
        {},
        { a: 20 },
        { a: 10 },
        { a: 8 },
        { a: 5 },
      ]);
    });
    test('Sort max->min, undefined is MAX', () => {
      expect(stub(true, false)).toEqual([
        { a: 5 },
        { a: 8 },
        { a: 10 },
        { a: 20 },
        {},
        {},
      ]);
    });
    test('Sort max->min, undefined is MIN', () => {
      expect(stub(true, true)).toEqual([
        {},
        {},
        { a: 5 },
        { a: 8 },
        { a: 10 },
        { a: 20 },
      ]);
    });
  });
});
