const express = require('express')

const db = require('../db/orders')

const router = express.Router()

module.exports = router

router.get('/orders', (req, res) => {
  db.listOrders()
    .then((orders) => {
      res.json(orders)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

//POST /api/v1/orders
router.get('/orders', async (req, res) => {
    const { id , item } = req.body
    await db.addOrder(id, item)
    res.redirect('/orders')
}