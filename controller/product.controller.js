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

// find all products controller
async function findProducts(req, res) {
    try {
        const products = await ProductModel.findAll()
        return res.status(200).send({
            message: 'All Products Fetched',
            data: products
        })
    } catch (e) {
        return res.status(500).send({
            message: 'Server Error',
            error: e.message
        })
    }
}

// find product by id controller
async function findProductById(req, res) {
    try {
        const ID = req.params.id
        const product = await ProductModel.findByPk(ID)
        return res.status(200).send({
            message: 'Product Fetched',
            data: product
        })
    } catch (e) {
        return res.status(500).send({
            message: 'Server Error',
            error: e.message
        })
    }
}

// update product by id controller
async function updateProductById(req, res) {
    try {
        const ID = req.params.id
        const updatedQuery = {
            ...req.body.query
        }
        const product = await ProductModel.update(updatedQuery, {
            where: {
                id: ID
            }
        })
        return res.status(200).send({
            message: 'Product Updated',
        })
    } catch (e) {
        return res.status(500).send({
            message: 'Server Error',
            error: e.message
        })
    }
}

// delete product by id controller
async function deleteProductById(req, res) {
    try {
        const ID = req.params.id
        await ProductModel.destroy({
            where: {
                id: ID
            }
        })
        return res.status(200).send({
            message: 'Product Deleted',
        })
    } catch (e) {
        return res.status(500).send({
            message: 'Server Error',
            error: e.message
        })
    }
}


module.exports = { createProduct, findProducts, findProductById, updateProductById, deleteProductById }