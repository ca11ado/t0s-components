const webpack = require('webpack');

const PRODUCTION_PLUGINS = [
  new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.OccurrenceOrderPlugin()
];

module.exports = {
  entry: './js/index.js',

  output: {
    path: __dirname + '/build',
    filename: 'components.js',
    publicPath: '/'
  },

  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        options: {
					plugins: ['syntax-dynamic-import'],
          presets: [
            ['@babel/preset-react'],
						['@babel/preset-env', { modules: false }]
          ]
        }
      }
    ]
  },

  optimization: {
    minimize: true
  }
};

