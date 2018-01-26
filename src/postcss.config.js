module.exports = () => ({
  plugins: {
    'postcss-easy-import': { prefix: '_' },
    'postcss-cssnext': {},
    lost: {},
    'rucksack-css': {},
    'postcss-image-inliner': {},
    'postcss-inline-svg': { path: './src/static/images' },
    'postcss-svgo': {
      plugins: [
        { removeComments: true },
        { removeDesc: true },
        { removeTitle: true },
        { removeDoctype: true },
        { removeMetadata: true },
      ],
    },
  },
});
