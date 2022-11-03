const { Router } = require('express')
const { nanoid } = require('nanoid')
// conjunto de rutas para la entidad user
const users = require('../data/user')
// CRUD
/**
 * CREATE - POST
 * READ - GET 
 * UPDATE - PUT, PATCH
 * DELETE - DELETE
 */
const UserRouter = Router()


UserRouter.route('/user')
.get((req, res) => {
    res.send({
        message: users,
        error: false
    })
})
.post((req, res) => {
    console.log('reqqqq', req.body)
    const { body: { name, email } } = req 
    users.push({
        id: nanoid(),
        name,
        email
    })
    res.status(201).send({
        message: users,
        error: false
    })

})

module.exports = UserRouter