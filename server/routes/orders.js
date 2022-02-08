const express = require('express')

const db = require('../db/orders')

const router = express.Router()

module.exports = router

// use the addOrder function in the post function below
router.post('/', (req, res) => {
    const { id, created_at, status } = req.body
    db.addOrder({ id, created_at, status })
    .then(() => {
    res.sendStatus(201)
    return null
    })
    .catch(err => {
    console.error(err)
    res.status(500).json({ message: 'error in server' })
    })
    
})

// router.get('/', (req, res) => {

//     db.listProducts()
//       .then((products) => {
//         res.json(products)
//         return null
//       })
//       .catch((err) => {
//         res.status(500).send('DATABASE ERROR: ' + err.message)
//       })
//   })