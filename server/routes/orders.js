const express = require('express')

const db = require('../db/orders')

const router = express.Router()

module.exports = router

// GET - /api/v1/orders
router.get('/', (req, res) => {
  db.listOrders()
    .then((orders) => {
      res.json(orders)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// POST - /api/v1/orders
router.post('/', (req, res) => {
  console.log('order POST request: ', req.body)
  db.addOrder(req.body)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch(err => {
      console.error('error hi', err)
    })
})
