const express = require('express')

const db = require('../db/orders')

const router = express.Router()

module.exports = router

// Configure your server to use those routes with an /api/v1/orders prefix.

router.post('/', (req, res) => {
    const orderRequest = req.body
    db.addOrder(orderRequest)
    .then(() => {
    res.sendStatus(201)
    return null
    })
    .catch(err => {
    console.error(err)
    res.status(500).json({ message: 'error in server' })
    })
    
})