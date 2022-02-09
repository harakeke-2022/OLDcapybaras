const express = require('express')
const router = express.Router()

const db = require('../db/orders')

router.get('/', (req, res) => {
  db.listOrders()
    .then(orders => { // ignore ids from db function
      res.json(orders)
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

router.post('/', (req, res) => {
//   const { name, quantity } = req.body
//   console.log(req.body)

  db.addOrder(req.body)
    .then(() => { // ignore ids from db function
      res.sendStatus(201)
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

router.put('/', (req, res) => {
  const { id, newStatus } = req.body
  console.log(req.body)
  db.editOrderStatus(id, newStatus)
    .then((orders) => {
      res.json(orders)
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

module.exports = router
