const express = require('express');
const router = express.Router();
router.use(express.json());

const orders = [
    {id: 1, fkreserveID: 1},
    {id: 2, fkreserveID: 2},
]

router.get('/', (req, res) => {
    res.json(orders);
})

router.post('/', (req, res) => {
    const order = req.body;
    order.id = orders.length + 1;
    try{
        orders.push(order);
        res.json(order);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const order = orders.find(order => order.id == id);
    if(!order){
        res.status(404).json({error: 'Order not found'});
    }
    try{
        orders.splice(orders.indexOf(order), 1);
        res.json(order);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const order = orders.find(order => order.id == id);
    if(!order){
        res.status(404).json({error: 'Order not found'});
    }
    res.json(order);
});


module.exports = router;