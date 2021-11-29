# custom-sorts

This library is custom sort utils.

## Installation

```shell
npm install custom-sorts
```

### or

```shell
yarn add custom-sorts
```

## Usage

This is all you need to get started:

```ts
const customSort = require('custom-sorts');
customSort.neSort([{ a: 10 }, { a: 5 }, { a: 20 }, { a: 8 }, {}], 'a', true);
// [ { a: 5 }, { a: 8 }, { a: 10 }, { a: 20 }, {} ]
```

### or es6

```ts
import { neSort } from 'custom-sorts';
neSort([{ a: 10 }, { a: 5 }, { a: 20 }, { a: 8 }, {}], 'a', false);
// [ { a: 20 }, { a: 10 }, { a: 8 }, { a: 5 }, {} ]
```

## License

[MIT](https://github.com/ogasawaraShinnosuke/custom-sorts/blob/main/LICENSE)
