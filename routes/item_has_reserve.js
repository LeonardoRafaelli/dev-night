const express = require('express');
const router = express.Router();
router.use(express.json());

const itemsOrders = [
    {itemID: 1, fkReserveID: 1},
    {itemID: 2, fkReserveID: 1},
    {itemID: 3, fkReserveID: 3}

]

router.get('/', (req, res) => {
    res.json(itemsOrders);
})

router.post




