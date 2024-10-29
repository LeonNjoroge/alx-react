const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    header: './js/header.js',
    body: './js/body.js',
    footer: './js/footer.js',
}, // Entry point for your application
  output: {
    filename: '[name].bundle.js', // Name of the output file
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  mode: 'development', // Set to 'development' for easier debugging
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'), // Serve static files from the public directory
    },
    port: 8564, // Port number for the server
    open: true, // Open the browser automatically
    hot: true, // Enable hot module replacement
  },
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
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html', // Use your index.html as a template
        filename: 'index.html', // Output filename
    }),
],
};