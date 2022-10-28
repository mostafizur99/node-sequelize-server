const ProductModel = require("../models/product.model")

// create a product controller
async function createProduct(req, res) {
    try {
        const productQuery = {
            title: req.body?.title,
            price: req.body?.price,
            imageThumb: req.body?.imageThumb,
            description: req.body?.description
        }

        const product = await ProductModel.create(productQuery)
        return res.status(200).send({
            message: 'Product Created',
            data: product
        })
    } catch (e) {
        return res.status(500).send({
            message: 'Server Error',
            error: e.message
        })
    }
}

async function getProduct(req, res) {
    try {
        return res.status(200).send({
            message: 'Product Fetched'
        })
    } catch {
        return res.status(500).send({
            message: 'Server Error'
        })
    }
}

module.exports = { getProduct, createProduct }