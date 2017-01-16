const path = require('path')
const fs = require('fs')
const { graphql } = require('graphql')
const chalk = require('chalk')
const { introspectionQuery, printSchema } = require('graphql/utilities')
const schema = require('../data/schema')
const jsonFile = path.join(__dirname, './schema.json')
const graphQLFile = path.join(__dirname, './schema.graphql')

function generateSchema() {
  graphql(schema, introspectionQuery).then(response => {
    fs.writeFileSync(jsonFile, JSON.stringify(response, null, 2))
    fs.writeFileSync(graphQLFile, printSchema(schema))

    console.log(chalk.green('Schema has been regenerated'))
  }).catch(error => {
    console.error(chalk.red(err.stack))
  })
}

module.exports = generateSchema
