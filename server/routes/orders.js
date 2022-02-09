const express = require('express')
const router = express.Router()

const db = require('../db/orders')

module.exports = router

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

router.post('/', (req, res) => {
  const orderRequest = req.body

  db.addOrder(orderRequest)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).send(err.message)
    })
})
