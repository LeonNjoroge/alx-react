const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // Name of the output file
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  mode: 'development', // Set to 'development' for easier debugging
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      jquery: path.resolve(__dirname, 'node_modules/jquery/src/jquery'), // Alias to load the correct version of jQuery
    },
  }
};