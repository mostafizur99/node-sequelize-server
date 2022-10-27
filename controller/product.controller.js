
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

module.exports = { getProduct }