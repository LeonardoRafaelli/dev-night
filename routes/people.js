const express = require('express')
const router = express.Router()
router.use(express.json())

const people = [
    {id: 1, user: "professor1", password: "123"},
    {id: 2, user: "professor2", password: "123"},
    {id: 3, user: "professor3", password: "123"},
    {id: 4, user: "atendente1", password: "123"},
    {id: 5, user: "adm1", password: "123"},
]

router.get('/', (req,res) => {
    res.json(people);
})

module.exports = router;
