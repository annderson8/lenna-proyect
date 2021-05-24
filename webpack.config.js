const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "/",
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@styles': path.resolve(__dirname, 'src/styles/')
    }
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.jpg/,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
            loader: 'url-loader', // NOMBRE DEL LOADER
            options: {
                limit: false, // O LE PASAMOS UN NUMERO
                // Habilita o deshabilita la transformación de archivos en base64.
                mimetype: 'aplication/font-woff',
                // Especifica el tipo MIME con el que se alineará el archivo. 
                name: "[name].[ext]",
                // EL NOMBRE INICIAL DEL PROYECTO + SU EXTENSIÓN
                outputPath: './assets/fonts/', 
                // EL DIRECTORIO DE SALIDA (SIN COMPLICACIONES)
                publicPath: '../assets/fonts/',
                // EL DIRECTORIO PUBLICO (SIN COMPLICACIONES)
                esModule: false
            }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images"
        }
      ]
  }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ]
  }
}