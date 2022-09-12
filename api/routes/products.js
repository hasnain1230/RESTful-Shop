const express = require('express')
const router = express.Router()

router.post('/', (req, res, next) => { // Should only deal with informationa after the forward slash
    json_data = {
        message: "POST Request Handler"
    }

    res.status(201).json(json_data)

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

router.patch('/:product_id', (req, res, next) => {
    json_data = {
        id: "Here, we are patching some product assuming the ID is valid" 
    }

    res.status(200).json(json_data)
})

router.delete('/:product_id', (req, res, next) => {
    json_data = {
        message: `Here, we are deleting some product: ${req.params.product_id}`
    }

    res.status(200).json(json_data)
})

module.exports = router