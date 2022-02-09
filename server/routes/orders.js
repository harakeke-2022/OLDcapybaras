const express = require('express')
const db = require('../db/orders')

const router = express.Router()

module.exports = router

// POST route for /api/v1/orders
router.post('/', (req, res) => {
    const product = {
        id: req.body.id,
        quantity: req.body.quantity
    }
    console.log(product)
    db.addOrder([product])
    .then(() => {
        res.sendStatus(201)
        return null
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({ message: 'error in server'})
    })
})









// /api/v1/orders

// router.post('/', (req, res) => {
//   const { name, quote } = req.body

//   db.addFilms({ name, quote })
//     .then(() => { // ignore ids from db function
//       res.sendStatus(201)
//       return null
//     })
//     .catch(err => {
//       console.error(err)
//       res.status(500).json({ message: 'error in server' })
//     })
// })

// module.exports = router