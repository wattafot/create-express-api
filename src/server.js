'use strict'

try {
  require('dotenv').config()
  const app = require('./App')
  const fs = require('fs')
  const https = require('https')
  const { connectMongoose, disconnectMongoose } = require('./tools/mongoose.js')
  
  const API_PORT = process.env.API_PORT 

  // you need to have the environment variables set for this!
  // connectMongoose()

  // enable https
  // const sslOptions = {
  //   key: fs.readFileSync('./cert/key.pem'),
  //   cert: fs.readFileSync('./cert/cert.pem'),
  //   passphrase: 'xxx'
  // }
  // https.createServer(sslOptions, app).listen(API_PORT, function () {
  //   console.log(`listening on port ${API_PORT}`)
  // })

  const server = app.listen(API_PORT, function() {
    console.log(`listening on port ${API_PORT}`)
  })
}
catch (err) {
  console.error('[server.js]', err.message);
  console.trace(err)
  throw err
}
