const webpack = require('webpack');

const PRODUCTION_PLUGINS = [
  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress:{
      warnings: true
    }
  }),
  new webpack.optimize.OccurrenceOrderPlugin()
];

module.exports = {
  entry: './js/components.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
};

