const mongoose = require('mongoose')

const connectMongoose = () => {
	mongoose.Promise = global.Promise
	if (mongoose.connection.readyState === 1) {
    return Promise.resolve(mongoose.connection)
	}

  const host = process.env.MONGO_HOST
  const port = process.env.MONGO_PORT 
  const database = process.env.MONGO_DB 
  const user = process.env.MONGO_USER 
  const pass = process.env.MONGO_PASS

  const connectionString = `mongodb://${host}:${port}/${database}`
  const connectionOptions = { user, pass }
  
  return mongoose.connect(connectionString, connectionOptions)
    .then(() => console.log('connected to :', `${host}`))
    .catch( err => {
      console.log(`[ERROR] [tools/mongoose.js] [connectMongoose] connection failed:`, { connectionString, host, port, database, user, pass })
      console.log(`[ERROR] [tools/mongoose.js] [connectMongoose] ${err.message}`)
      throw err
    })		
}

const disconnectMongoose = () => {
  return mongoose.disconnect()
}

module.exports = {
	connectMongoose,
	disconnectMongoose
}
