const express = require('express')

const db = require('../db/orders')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  const order = req.body
  db.addOrder(order)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
