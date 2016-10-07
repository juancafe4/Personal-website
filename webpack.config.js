const path = require('path')
const webpack = require('webpack')
module.exports = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',  
  entry: ["react-hot-loader/patch", 
  'bootstrap-loader',
  'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
  'webpack/hot/only-dev-server',
  './src/main.js'], // "only" prevents reload on syntax errors],
  output: {
    path: path.resolve(__dirname + '/build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel'
      },
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    	},
      // Bootstrap 3 jquery requirement
      { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' }
    ]
  },
  plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.OldWatchingPlugin()
  ],
}