const path = require('path')
const webpack = require('webpack')
const express = require('express')
const graphQLHTTP = require('express-graphql')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('../webpack.config')
const schema = require('./schema')

const { PORT } = process.env

const app = new WebpackDevServer(webpack(webpackConfig), {
  contentBase: '/build/',
  stats: {
    colors: true
  },
  hot: true,
  historyApiFallback: true
})

app.use('/', express.static(path.join(__dirname, '../build')))
app.use('/graphql', graphQLHTTP({ schema }))

app.listen(PORT, () => {
  console.log(`Relay is listening on port ${PORT}`)
})
