const { createProduct, getProduct } = require('../controller/product.controller')

const productRoute = (app) => {

    // create a product route
    app.post('/api/products', createProduct)

    app.get('/api/products', getProduct)
}

module.exports = productRoute