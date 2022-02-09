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
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  console.log('req', req.body)
  db.addOrder(req.body)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch(err => {
      console.error('Hi', err)
    })
})
