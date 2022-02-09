const express = require('express')

const db = require('../db/orders')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  db.addOrder(req.body)
    .then((item) => {
      res.json(item)
      return null
    })
    .catch((err) => {
      res.send(500).send(err.message('add order error lol'))
    })
})

router.get('/', (req, res) => {
  db.listOrders()
  return []
})
