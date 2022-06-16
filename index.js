const express = require("express");
const app = express();

app.get('/', (req, res) =>{
    res.send('sadnuasbud')
}) 

const itemsRouter = require('./routes/items.js')
const reservationsRouter = require('./routes/reservations.js')
app.use('/items', itemsRouter)
app.use('/reservations', reservationsRouter)

app.listen(8181, () => {
    console.log('Running')    
})
