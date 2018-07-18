import path from 'path';

export default {
  entry: {
    background: './src/background.js',
    contentscript: './src/contentscript.js',
    popup: './src/popup.js',
    script: ['babel-polyfill', './src/script.js']
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../futhor-build')
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json'],
    modules: ['node_modules']
  },

  module: {
    rules: [{
      test: /\.(jsx|js)?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    }]
  }
};
