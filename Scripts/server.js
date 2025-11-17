const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("here");
    res.json({message: "hello world"});
});

app.listen(3000);