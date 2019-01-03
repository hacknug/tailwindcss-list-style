module.exports = function (variants) {
  return function ({ addUtilities }) {
    addUtilities(
      {
        // List Style Type
        '.list-disc': { listStyleType: 'disc' },
        '.list-circle': { listStyleType: 'circle' },
        '.list-square': { listStyleType: 'square' },
        '.list-decimal': { listStyleType: 'decimal' },
        '.list-decimal-leading-zero': { listStyleType: 'decimal-leading-zero' },
        '.list-lower-roman': { listStyleType: 'lower-roman' },
        '.list-upper-roman': { listStyleType: 'upper-roman' },
        '.list-lower-greek': { listStyleType: 'lower-greek' },
        '.list-lower-latin': { listStyleType: 'lower-latin' },
        '.list-upper-latin': { listStyleType: 'upper-latin' },
        '.list-armenian': { listStyleType: 'armenian' },
        '.list-georgian': { listStyleType: 'georgian' },
        '.list-lower-alpha': { listStyleType: 'lower-alpha' },
        '.list-upper-alpha': { listStyleType: 'upper-alpha' },
        '.list-none': { listStyleType: 'none' },

        // List Style Position
        '.list-inside': { listStylePosition: 'inside' },
        '.list-outside': { listStylePosition: 'outside' },
      },
      variants
    )
  }
}
