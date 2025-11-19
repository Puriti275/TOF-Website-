const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(logger)

app.get('/', (req, res) => {
    console.log("here");
    res.render('index');
});

const userRouter = require('./routes/users')

//anything starting with router will start with a path of /users
app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}
//you can put middleware into certain gets, sets and more
//to only run it on that individual route

app.listen(3000);