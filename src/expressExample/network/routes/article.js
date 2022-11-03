const { Router } = require('express')
const { nanoid } = require('nanoid')
// conjunto de rutas para la entidad user
const articles = require('../../data/article')
const response = require('./response')
// CRUD
/**
 * CREATE - POST
 * READ - GET 
 * UPDATE - PUT, PATCH
 * DELETE - DELETE
 */
const ArticleRouter = Router()


ArticleRouter.route('/article')
.get((req, res) => {
    response({ error: false, message: articles, res, status: 200 })
    })
.post((req, res) => {
    const { body: { name, price, descripcion } } = req 
    articles.push({
        id: nanoid(),
        name,
        price,
        descripcion
    })
    response({ error: false, message: articles, res, status: 201 })

})
ArticleRouter.route('/article/:id')
.delete((req,res) => {
    const { params: { id }} = req
    const articleIndex = articles.findIndex(article => article.id === id)
    if(articleIndex === -1) 
        return response({
            message: `Article with id: ${id} was not found`,
            res,
            status: 404
    })
    articles.splice(articleIndex, 1)
    response({ error: false, message: articles, res, status: 200 })
})
.patch((req, res) => {
    const {
    body: { name, price, description },
    params: { id }
    } = req
    const articleIndex = articles.findIndex(article => article.id === id)

    if (articleIndex === -1)
    return response({
        message: `Article with id: ${id} was not found`,
        res,
        status: 404
    })

    articles.splice(articleIndex, 1, {
    ...articles[articleIndex],
    ...(name && { name }),
    ...(price && { price }),
    ...(description && { description }),
    })
    response({ error: false, message: articles, res, status: 200 })
})

module.exports = ArticleRouter