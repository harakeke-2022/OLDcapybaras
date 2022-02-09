const express = require('express')

const db = require('../db/orders')

const router = express.Router()

module.exports = router

// /api/v1/orders
router.post('/', (req, res) => {
  const product = {
    id: req.body.id,
    quantity: req.body.quantity
  }
  console.log([product])
  db.addOrder([product])
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
