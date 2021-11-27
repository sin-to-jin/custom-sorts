module.exports = {
  neSort: (d, k, o, n) => {
    return d.slice().sort((a, b) => (a[k] ?? n) > (b[k] ?? n) ? o ? 1 : -1 : o ? -1 : 1)
  }
}

