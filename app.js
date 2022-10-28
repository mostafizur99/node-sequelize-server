const express = require('express')
require('dotenv').config()
const productRoute = require('./routes/product.route')
const connectDb = require('./utils/connectDb')

const app = express()
const port = 5000

app.use(express.json());

connectDb.sync()
    .then(result => {
        // console.log(result);
        console.log('Database Connected');

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)

            productRoute(app)
        })
    })
    .catch(err => {
        console.log(err);
    });