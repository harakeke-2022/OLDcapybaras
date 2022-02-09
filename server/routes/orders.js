const express = require('express')

const db = require('../db/orders')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.listOrders()
    .then((orders) => {
      res.json(orders)
      return null
    })
    .catch((err) => {
      res.status(500).send('ERROR BRO: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const order = req.body
  console.log('this is your order:', order)
  db.addOrder(order)
    .then(() => {
      res.sendStatus(201)
      //res.status is not working no more
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
