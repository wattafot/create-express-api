'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const users = require('../modules/users.module.js')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', async function (req, res) {
  try {
    const result = await users.getUsers()
    return res.status(200).send(result)
  }
  catch(err) {
    console.error('[ERROR][users.router][GET/]')
    res.status(500).send(err.message)
  }
})

module.exports = router
