module.exports = {
  "env": {
    "node": true,
    "mocha": true,
  },

  "plugins": [
    "mocha",
    "chai-friendly"
  ],
  "rules": {
    "no-unused-expressions": 0,
    "chai-friendly/no-unused-expressions": 2,

    "mocha/no-exclusive-tests": "error",
    "mocha/no-skipped-tests": "error",
    "mocha/max-top-level-suites": ["warn", {limit: 2}],
    "mocha/no-identical-title": "error",
    "react/jsx-filename-extension": 'off',

    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }]

  }
}
