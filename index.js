const express = require("express");
const app = express();

app.get('/', (req, res) =>{
    res.send('sadnuasbud')
}) 

app.listen(8181, () => {
    console.log('Running')    
}) 