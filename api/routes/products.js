const express = require('express')
const router = express.Router()

router.post('/', (req, res, next) => { // Should only deal with informationa after the forward slash
    json_data = {
        message: "POST Request Handler"
    }

    res.status(200).json(json_data)

    next()
})


router.get('/', (req, res, next) => { // Should only deal with informationa after the forward slash
    json_data = {
        message: "GET request handler"
    }
    
    res.status(200).json(json_data)

    next()
})


router.get('/:product_id', (req, res, next) => {
    json_data = {
        id: req.params.product_id
    }

    res.status(200).json(json_data)

    next()
})

module.exports = router