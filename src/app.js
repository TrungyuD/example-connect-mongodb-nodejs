let express = require('express');

let bodyParser = require('body-parser');

let todoRoutes = require('./todoRoutes');

let app = express ();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res) => {
    res.send('Hello, world!');
})

app.use('/todos', todoRoutes);

module.exports = app;