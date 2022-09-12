const express = require('express')
const app = express() // Standard expression 

const products = require('./api/routes/products')

app.use('/products', products)

module.exports = app