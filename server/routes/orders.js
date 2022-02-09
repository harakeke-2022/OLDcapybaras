const express = require('express')

const db = require('../db/orders')

const router = express.Router()



// use the addOrder function in the post function below
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

module.exports = router