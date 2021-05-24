const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development',
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
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3006
  }
}