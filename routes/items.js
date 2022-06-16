const express = require('express')
const router = express.Router()
router.use(express.json())


const people = [
    {id: 1, user: "professor1", passwd: "123"},
    {id: 2, user: "atendente1", passwd: "123"},
    {id: 3, user: "adm1", passwd: "123"}
]

const items = [
    {name: 'Item 1', price: 12.99},
    {name: 'Item 2', price: 13.99},
    {name: 'Item 3', price: 14.99},
]

router.get('/', (req, res) => {
    res.json(items)
})

module.exports = router