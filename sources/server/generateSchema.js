const path = require('path')
const fs = require('fs')
const { graphql } = require('graphql')
const { introspectionQuery, printSchema } = require('graphql/utilities')
const schema = require('./schema')

const jsonFile = path.join(__dirname, './schema.json')
const graphQLFile = path.join(__dirname, './schema.graphql')

function generateSchema() {
  graphql(schema, introspectionQuery).then(response => {
    fs.writeFileSync(jsonFile, JSON.stringify(response, null, 2))
    fs.writeFileSync(graphQLFile, printSchema(schema))
  }).catch(error => {
    console.error(error.stack)
  })
}

module.exports = generateSchema
