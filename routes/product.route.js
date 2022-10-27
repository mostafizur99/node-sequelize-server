const { getProduct } = require('../controller/product.controller')

const productRoute = (app) => {

    app.get('/api/products', getProduct)
}

module.exports = productRoute