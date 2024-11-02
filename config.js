const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = () => ({
  context: path.resolve(__dirname, './src'),
  mode: 'development',
  entry: {
    main: ['./main.js']
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: '../public/images', to: '../dist/images' }]
    })
  ],
  output: {
    path: path.resolve(__dirname, './dist')
  }
});
