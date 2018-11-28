const autoprefixer = require('autoprefixer')
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.(ttf|eot|otf|woff(2)?)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
           loader: require.resolve('tslint-loader')
          }
        ],
        include: path.join(__dirname, '/lib'),
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
};
