const CopyPlugin = require('copy-webpack-plugin')

const config = {
  node: {
    __dirname: false,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/main/inject', to: 'inject' },
        { from: 'src/main/preload.js', to: '' },
      ],
    }),
  ],
}

module.exports = config
