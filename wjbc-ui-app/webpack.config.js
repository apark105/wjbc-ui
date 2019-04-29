const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const ExtractTextPlugin = require(`extract-text-webpack-plugin`);
const CompressionPlugin = require(`compression-webpack-plugin`);
const Dotenv = require(`dotenv-webpack`);

// Build define plugin based on enviroment
const ENV = {
  local: `local`,
  dev: `dev`,
  prod: `prod`
};
const env = (process && process.env && process.env.NODE_ENV) || ENV.local;
// Build Plugins
const stylesheetsPlugin = new ExtractTextPlugin(`[hash].css`);
const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: `index.html` });
// const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } });
const compressionPlugin = new CompressionPlugin();

const envPlugin = new Dotenv({
  path: `./.env_${env}`,
  // Load client credentials from Jenkins
  ...(process.env.CLIENT_S_APP && process.env.CLIENT_ID_APP ? { systemvars: true } : {})
});
console.log(`Loading ${env}`, envPlugin);

// Reference will be used with the es6 spread operator
const prodPlugins = [compressionPlugin];

const LOADERS = {
  style: `style-loader`,
  css: `css-loader`,
  sass: `sass-loader`,
  less: `less-loader`,
  babel: `babel-loader`,
  html: `html-loader`,
  file: `file-loader`,
  svg: `svg-inline-loader?classPrefix=true&idPrefix=true`
};

// Style Loaders reference for the es6  spread operator
const styleLoaders = {
  cssLoader: [{ loader: LOADERS.css }],
  sassLoader: [{ loader: LOADERS.sass }],
  sassOptionLoader: [
    {
      loader: LOADERS.sass,
      options: {
        indentedSyntax: `sass`
      }
    }
  ],
  lessLoader: [{ loader: LOADERS.less }]
};

module.exports = {
  context: path.join(__dirname, `src`),
  entry: `./index`,
  output: {
    filename: `[hash].js`,
    path: path.join(__dirname, env === ENV.prod ? `dist-prod` : `dist`)
  },
  devtool: `cheap-source-map`,
  plugins: [
    stylesheetsPlugin,
    htmlWebpackPlugin,
    envPlugin,
    ...(env === ENV.prod ? prodPlugins : [])
  ],
  resolve: {
    modules: [`node_modules`, path.join(__dirname, `src`)],
    aliasFields: [`browser`]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: LOADERS.babel
      },
      {
        test: /\.html$/,
        loader: LOADERS.html
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: LOADERS.style,
          use: styleLoaders.cssLoader
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: LOADERS.style,
          use: [...styleLoaders.cssLoader, ...styleLoaders.sassLoader]
        })
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: LOADERS.style,
          use: [...styleLoaders.cssLoader, ...styleLoaders.sassOptionLoader]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: LOADERS.style,
          use: [...styleLoaders.cssLoader, ...styleLoaders.lessLoader]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: LOADERS.file,
            options: {
              name: `assets/[hash].[ext]`
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: LOADERS.svg
      }
    ]
  }
};
