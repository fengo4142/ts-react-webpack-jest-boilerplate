const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const APP_DIR = path.resolve(__dirname, './src');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './dist');

const isDevMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevMode ? 'development' : 'production',
  entry: {
    app: APP_DIR + '/index.tsx'
  },
  stats: {
    warnings: false
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    historyApiFallback: true,
    contentBase: BUILD_DIR,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: PUBLIC_DIR + '/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: isDevMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevMode ? '[id].css' : '[id].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevMode
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevMode
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevMode
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg|json|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            url: false
          }
        },
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss']
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}