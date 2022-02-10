const express = require('express')

const db = require('../db/orders')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
    const orderRequest = req.body


    db.addOrder(orderRequest)   //"orderRequest" have to send array
        .then(() => {
            res.sendStatus(201)
            return null
        })
        .catch((err) => {
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})

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
