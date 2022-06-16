const express = require('express')
const router = express.Router()
router.use(express.json())

const items = [
    {name: 'Item 1', price: 12.99},
    {name: 'Item 2', price: 13.99},
    {name: 'Item 3', price: 14.99},
]

router.get('/', (req, res) => {
    res.json(items)
})

module.exports = router