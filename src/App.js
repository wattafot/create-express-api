const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const Users = require('./routes/users.router.js')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cors({
	credentials: 'include',
	origin: true
}))

app.use(morgan('dev'))
app.use(cookieParser())
app.get('/', function(req, res) {
  res.send(`${process.env.API_NAME}`)
})

app.use('/user', Users)

module.exports = app