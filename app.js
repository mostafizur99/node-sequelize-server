require('dotenv').config()
const connectDb = require('./connectDb')

const connectDB = async () => {
    try {
        await connectDb.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connectDB()
console.log('Hello')