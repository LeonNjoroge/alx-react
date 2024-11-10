const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Specify the output path for the bundle
    clean: true, // Clean the output directory before each build
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', 
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // List the extensions you want to resolve
  },
  devServer: {
    static: './dist',
    compress: true,
    open: true,
    hot: true,
    port: 8564,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html', // Adjusted to point to the HTML template
      filename: 'index.html', // The output filename for the generated HTML
      inject: true, // Automatically inject the bundle into the HTML
    }),
  ],
};
