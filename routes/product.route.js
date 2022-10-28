const { createProduct, findProducts, findProductById } = require('../controller/product.controller')

const productRoute = (app) => {

    // create a product route
    app.post('/api/products', createProduct)

    //find all products route
    app.get('/api/products', findProducts)

    //find product by id route
    app.get('/api/products/:id', findProductById)
}

module.exports = productRoute