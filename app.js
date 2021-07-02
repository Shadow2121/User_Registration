const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
require('dotenv').config()
const users = require('./routers/user')

const port = 5000;

app.use(express.static('./public'))

app.use(express.json())

app.use('/api/v1/users', users)

app.use(notFound)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is on ...`))
    } catch (error) {
        console.log(error);
    }
}

start()

module.exports = app