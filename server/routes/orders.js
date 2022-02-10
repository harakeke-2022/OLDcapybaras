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

// GET route for /api/v1/orders 

router.get('/', (req, res) => {
    db.listOrders()
    .then (orders => {
        res.json(orders)
        return null
    })
    .catch((err) => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
})

// PATCH route for /api/v1/orders

// db.editOrderStatus(id: number, newStatus: string)
router.patch('/', (req, res) => {
    const { id, status } = req.body
    db.editOrderStatus(id, status)
    .then((order)=> {
        res.json(order)
        return null
    })
    .catch((err) => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
})



// router.patch('/:id', (req, res) => {
//     const updatePost = req.body
//     const updatePostId =Number(req.params.id)
//     db.updateExistingPost(updatePostId, updatePost)
//       .then((betterPost) => {
//         res.json({betterPost})
//       })
//       .catch((err) => {
//         res.status(500).json({error: err.message})
//       })
//   })