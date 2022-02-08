const path = require('path')
const express = require('express')

const products = require('./routes/products')
// configure server to use routes with an /api/v1/orders prefix
const orders = require('./routes/orders')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/products', products)
// configure server to use routes with an /api/v1/orders prefix
server.use('/api/v1/orders', orders)

// For the client side BrowserRouter - because there is no '#' to distinguish
// between client and server side routes, this sends back the index.html
// (which contains the bundle.js) if none there is no server side route match.
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
