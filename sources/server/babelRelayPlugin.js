const fs = require('fs')
const path = require('path')
const jsonFile = path.join(__dirname, './schema.json')

fs.access(jsonFile, fs.F_OK, (err) => {
  if (!err) {
    module.exports = require('babel-relay-plugin')(require(jsonFile).data)
  }
})
