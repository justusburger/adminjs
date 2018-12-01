/**
 * @namespace MongooseAdapter
 */

const BaseDatabase = require('../base/database')
const Model = require('./model')

/**
 * Adapter for mongoose database
 * @memberof MongooseAdapter
 * @extends {BaseDatabase}
 * @alias MongooseAdapter.Database
 */
class Database extends BaseDatabase {
  constructor(connection) {
    super(connection)
    this.connection = connection
  }

  models() {
    return Model.all(this.connection)
  }

  name() {
    return this.connection.name
  }

  find(modelName) {
    return Model.find(this.connection, modelName)
  }
}

module.exports = Database
