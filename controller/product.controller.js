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

async function findProducts(req, res) {
    try {
        const products = await ProductModel.findAll()
        return res.status(200).send({
            message: 'All Products Fetched',
            data: products
        })
    } catch {
        return res.status(500).send({
            message: 'Server Error'
        })
    }
}

module.exports = { findProducts, createProduct }