const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log("here");
    res.render('index');
});

app.get('/users', (req, res) => {
    res.send("User List")
})

app.get('/users/new', (req, res) => {
    res.send("User New Form")
})

app.listen(3000);