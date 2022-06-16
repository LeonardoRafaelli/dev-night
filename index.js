const express = require("express");
const app = express();

app.get('/', (req, res) =>{
    res.send('sadnuasbud')
}) 

const itemsRouter = require('./routes/items.js')
app.use('/items', itemsRouter);

app.listen(8181, () => {
    console.log('Running')    
})
