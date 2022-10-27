const express = require('express')
require('dotenv').config()
const connectDb = require('./utils/connectDb')

const app = express()
const port = 5000

connectDb.sync()
    .then(result => {
        // console.log(result);

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    })
    .catch(err => {
        console.log(err);
    });