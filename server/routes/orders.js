const express = require('express')
const db = require('../db/orders')
const router = express.Router()
module.exports = router


// GET /api/v1/orders/
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

// POST /api/v1/orders/
router.post('/', (req, res) => {

  const requestOrder = req.body

  db.addOrder(requestOrder)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      res.status(500).send('Order error')
    })
})
