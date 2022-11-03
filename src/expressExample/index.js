const express = require('express')
const morgan =require('morgan')

const { userRouter } = require('./routes')

const app = express();
const PORT = process.env.PORT

// Articles: price, image, description, name
// Users:name, email,  articles[]

app.use(express.json())
app.use(morgan('dev'))
app.use(userRouter)

app.use((req, res) => {
    response({
    message: 'This route does not exists',
    res,
    status: 404
    })
})

app.listen(PORT, () => {
    console.log(`corriendo en puerto ${PORT}`)
})