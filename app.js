var express = require('express');
var routesql = require('./Route/routemysql')
var app = express();
app.use(routesql);

//route
app.get('/', (req, res)=>{
    res.send('Express ❤ MySQL')
})

//aktivasi server
app.listen(3210, ()=>{
    console.log('Server aktif di port 3210!')
})