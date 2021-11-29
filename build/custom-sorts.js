"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.neSort = void 0;
var neSort = function (d, k, o, n) {
    return d
        .slice()
        .sort(function (a, b) { var _a, _b; return (((_a = a[k]) !== null && _a !== void 0 ? _a : n) > ((_b = b[k]) !== null && _b !== void 0 ? _b : n) ? (o ? 1 : -1) : o ? -1 : 1); });
};
exports.neSort = neSort;
