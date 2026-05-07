const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

require('dotenv').config({ path: './.env' });

module.exports = {
  mode: 'production', // Set the mode here
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    asyncChunks: true,
    clean: true,
    publicPath: '/'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'public')
      },
      {
        directory: path.join(__dirname, 'src')
      }
    ],
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.m?js$/,
        enforce: 'pre',
        use: ['source-map-loader']
      },
      {
        test: /\.css$/, // Use postcss-loader for CSS files
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader' // Process CSS with PostCSS, Tailwind, and Autoprefixer
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(webm|mp4)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      favicon: './public/favicon.ico'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }
};
