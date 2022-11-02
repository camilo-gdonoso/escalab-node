const express = require('express');
const morgan =require('morgan');
const app = express();
const PORT = process.env.PORT
app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.send({
        message: 'Hola mundo desde express'
    })
})

app.listen(PORT, () => {
    console.log(`corriendo en puerto ${PORT}`)
})