const { createProduct, findProducts } = require('../controller/product.controller')

const productRoute = (app) => {

    // create a product route
    app.post('/api/products', createProduct)

    //find all oroducts route
    app.get('/api/products', findProducts)
}

module.exports = productRoute