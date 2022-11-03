const { nanoid } = require('nanoid')
// price, image, description, name
const articles = [
    {
        id: nanoid(),
        name: 'Laptop',
        price: '50',
        description: 'laptop hp i5',
       // image: 'john@example.com',

    }
]

module.exports = articles;