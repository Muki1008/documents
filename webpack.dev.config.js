/*
 *  Copyright (c) 2018 Daimler AG. All rights reserved.
 *  Implemented 2018 by DCCS GmbH.
 */

var merge = require('webpack-merge');
var HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
var baseWebpackConfig = require('./webpack.config.js');


// Load Development configuration.
module.exports = merge(baseWebpackConfig, {
  devtool: "source-map",
  devServer: {
    port: '9000',
    proxy: {
      '/rest': {
        target: 'http://localhost:8080/Certificate-1.0-SNAPSHOT/',
        secure: false
      }
    },
    inline: false
  },
  plugins: [
    new HtmlWebpackExternalsPlugin({
                                     externals: [
                                       {
                                         module: 'react',
                                         entry: '../../node_modules/react/umd/react.development.js'
                                       }, {
                                         module: 'react-dom',
                                         entry: '../../node_modules/react-dom/umd/react-dom.development.js'
                                       }
                                     ]
                                   })
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
});