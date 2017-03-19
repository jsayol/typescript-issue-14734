module.exports = {
  entry: [
    './index.js'
  ],
  devtool: 'source-map',
  output: {
    path: __dirname,
    libraryTarget: 'umd',
    library: 'webpackTslibDemo',
    filename: 'bundle.umd.js'
  },
  resolve: {
    extensions: ['.js']
  }
};
