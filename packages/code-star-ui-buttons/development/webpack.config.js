const autoprefixer = require('autoprefixer')
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
           loader: require.resolve('tslint-loader')
          }
        ],
        include: path.join(__dirname, '/src'),
      },
      {
        oneOf: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          },
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  sourceMap: true,
                  localIdentName: '[local]__[hash:base64:5]',
                  minimize: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  sourceMap: true,
                  plugins: () => [
                    autoprefixer({
                      browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
                    })
                  ]
                }
              },
              'sass-loader',
            ]
          },
          {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1
                }
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9'
                      ],
                      flexbox: 'no-2009'
                    })
                  ]
                }
              }
            ]
          }
        ],
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    libraryTarget: 'umd',
    library: 'CodeStarUIButton',
    path: path.join(__dirname, '../lib'),
    filename: 'code-star-ui-buttons.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    stats: "errors-only",

    host: process.env.HOST,
    port: process.env.PORT,
    open: true,

    overlay: true,

    watchOptions: {
      aggregateTimeout: 300,

      poll: 1000,
    },
  }
};
