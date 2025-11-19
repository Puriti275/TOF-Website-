const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    console.log("user list")
    res.send("User List")
})

router.get('/new', (req, res) => {
    console.log("user new form")
    res.send("User New Form")
})

//creates a new user (more code needed)
router.post('/', (req, res) => {
    res.send("Create User")
})

//the route allows us to use get, put, and delete all
//in the same lines
//get accesses a user
//put updates a user's info
//delete deletes a user
router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user)
        res.send('Get user with ID ' + req.params.id)
    })
    .put((req, res) => {
        res.send('Update user with ID ' + req.params.id)
    })
    .delete((req, res) => {
        res.send('Delete user with ID ' + req.params.id)
    })

const users = [{name: "Andrew"}, {name: "Atleana"}]

//whenever you go to a route with an ID parameter, run
//the following code with a request, response, next, and id
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next() //goes to the next piece of middleware
})

//middleware is code that runs between when the request is sent
//to the server and when the response being returned to the user

module.exports = router