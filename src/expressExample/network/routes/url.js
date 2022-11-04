const { Router } = require('express')
const { nanoid } = require('nanoid')
const {mongo: { queries} } = require('../../database')


const response = require('./response')
const { url: { saveUrl, getOneUrl} } = queries


const UrlRouter = Router()


// http://localhost:3000/user
UrlRouter.route('/url')
.post(async (req, res) => {
    const { body: { link } } = req
    try {
        const result = await saveUrl(nanoid(6), link)
        response({ 
            error: false,
            message: result,
            res,
            status: 201
        })
    } catch (error) {
        response({ message: 'Internal server error', res })
    }

})

UrlRouter.route('/url/:id')
  .get(async (req, res) => {
    const { params: { id } } = req
   try {
    const url = await getOneUrl(id)
    res.redirect(url.link)
   } catch (error) {
    console.error(error)
    response({ message: 'Internal server error', res })
   }
    // const userIndex = urls.findIndex(user => user.id === id)

    // if (userIndex === -1)
    //   return response({
    //     message: `User with id: ${id} was not found`,
    //     res,
    //     status: 404
    //   })

    // urls.splice(userIndex, 1)
    // response({ error: false, message: urls, res, status: 200 })
  })
//   UserRouter.route('/user/:id')
//   .delete((req, res) => {
//     const { params: { id } } = req
//     const userIndex = urls.findIndex(user => user.id === id)

//     if (userIndex === -1)
//       return response({
//         message: `User with id: ${id} was not found`,
//         res,
//         status: 404
//       })

//     urls.splice(userIndex, 1)
//     response({ error: false, message: urls, res, status: 200 })
//   })
//   .patch((req, res) => {
//     const {
//       body: { name, email },
//       params: { id }
//     } = req
//     const userIndex = urls.findIndex(user => user.id === id)

//     if (userIndex === -1)
//       return response({
//         message: `User with id: ${id} was not found`,
//         res,
//         status: 404
//       })

//     urls.splice(userIndex, 1, {
//       ...urls[userIndex],
//       ...(name && { name }),
//       ...(email && { email })
//     })
//     response({ error: false, message: urls, res, status: 200 })
//   })

// module.exports = UserRouter

// JSON - DIC - BSON
module.exports = UrlRouter