const express = require("express");
const app = express();

app.get('/', (req, res) =>{
    res.send('sadnuasbud')
}) 

const itemsRouter = require('./routes/items.js');
const reservationsRouter = require('./routes/reservations.js');
const teachersRouter = require('./routes/teachers.js');
const ordersRouter = require('./routes/orders.js');

app.use('/teachers', teachersRouter);
app.use('/items', itemsRouter)
app.use('/reservations', reservationsRouter)
app.use('/orders', ordersRouter);

app.listen(8181, () => {
    console.log('Running')    
})
