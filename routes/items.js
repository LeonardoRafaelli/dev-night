const express = require('express')
const router = express.Router()
router.use(express.json())

//static items
const items = [
    {itemId: 1,name: 'Item 1', stockQuantity: 10, description: 'This is item 1', image: 'drive.com/item1.jpg'},
    {itemId: 2, name: 'Item 2', stockQuantity: 20, description: 'This is item 2', image: 'drive.com/items2.jpg'},
    {itemId: 3, name: 'Item 3', stockQuantity: 30, description: 'This is item 3', image: 'drive.com/item3.jpg'},
]

router.get('/', (req, res) => {
    res.json(items)
})

router.post('/', async(req, res) => {
    const newItem = {
        itemId: items.length + 1,
        name: req.body.name,
        stockQuantity: req.body.stockQuantity,
        description: req.body.description,
        image: req.body.image,
    }
    try{
        items.push(newItem)
        res.status(202).json(newItem)
    }catch (err){
        res.status(500).json({error: err.message})
    }
})

module.exports = router