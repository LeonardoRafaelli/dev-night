const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors())

app.get('/', (req, res) =>{
    res.send('sadnuasbud')
}) 

const itemsRouter = require('./routes/items.js');
const reservationsRouter = require('./routes/reservations.js');
const teachersRouter = require('./routes/teachers.js');
const ordersRouter = require('./routes/orders.js');
const storageRouter = require('./routes/storage.js');

app.use('/teachers', teachersRouter);
app.use('/items', itemsRouter)
app.use('/reservations', reservationsRouter)
app.use('/storage', storageRouter)
app.use('/orders', ordersRouter);

app.listen(8181, () => {
    console.log('Running')    
})
