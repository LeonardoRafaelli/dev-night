const express = require('express')
const router = express.Router()
router.use(express.json())

//static items
const items = [
    {itemId: 1,name: 'Item 1', stockQuantity: 10, description: 'This is item 1', storagePosition: 8, image: 'drive.com/item1.jpg'},
    {itemId: 2, name: 'Item 2', stockQuantity: 20, description: 'This is item 2', storagePosition: 10, image: 'drive.com/items2.jpg'},
    {itemId: 3, name: 'Item 3', stockQuantity: 30, description: 'This is item 3', storagePosition: 2, image: 'drive.com/item3.jpg'},
]

router.get('/', (req, res) => {
    res.json(items)
})

router.get('/:itemId', (req, res) => {
    const item = items.find(item => item.itemId === parseInt(req.params.itemId))
    if(!item) return res.status(404).send('Item not found')
    res.status(200).json(item)
})

router.post('/', async(req, res) => {
    const newItem = {
        itemId: items.length + 1,
        name: req.body.name,
        stockQuantity: req.body.stockQuantity,
        description: req.body.description,
        storagePosition: req.body.storagePosition,
        image: req.body.image,
    }
    try{
        items.push(newItem)
        res.status(201).json(newItem)
    }catch (err){
        res.status(500).json({error: err.message})
    }
})

router.patch('/:itemId', async(req, res) => {
    const itemId = req.params.itemId
    const item = await items.find(item => item.itemId == itemId)
    if(!item){
        res.status(404).json({error: 'Item not found'})
    }
    try{
        item.name = req.body.name
        item.stockQuantity = req.body.stockQuantity?? item.stockQuantity
        item.description = req.body.description?? item.description
        item.storagePosition = req.body.storagePosition?? item.storagePosition
        item.image = req.body.image?? item.image
        res.status(202).json(item)
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
})

router.delete('/:itemId', async(req, res) => {
    const itemId = req.params.itemId
    const item = await items.find(item => item.itemId == itemId)
    if(!item){
        res.status(404).json({error: 'Item not found'})
    }
    try{
        items.splice(items.indexOf(item), 1)
        res.status(202).json(item)
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
})

module.exports = router
