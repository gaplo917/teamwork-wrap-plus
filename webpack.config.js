const CopyPlugin = require('copy-webpack-plugin')

const config = {
  node: {
    __dirname: false,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/main/inject/inject.js', to: 'inject' },
        { from: 'src/main/inject/dark-mode-fixes.css', to: 'inject' },
      ],
    }),
  ],
}

module.exports = config
