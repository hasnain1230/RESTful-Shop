const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Orders have been FETCHED"
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "Orders have been FETCHED"
    })
})

router.get('/:order_id', (req, res, next) => {
    res.status(201).json({
        message: "Order ID has been FETCHED: " + req.params.order_id
    })
})

module.exports = router