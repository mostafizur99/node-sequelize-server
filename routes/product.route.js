const { createProduct, findProducts, findProductById, updateProductById } = require('../controller/product.controller')

const productRoute = (app) => {

    // create a product route
    app.post('/api/products', createProduct)

    //find all products route
    app.get('/api/products', findProducts)

    //find product by id route
    app.get('/api/products/:id', findProductById)

    //update product by id route
    app.put('/api/products/:id', updateProductById)
}

module.exports = productRoute