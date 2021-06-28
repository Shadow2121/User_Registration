const express = require('express');
const app = express();
const connectDB = require('./db/connect')
require('dotenv').config()
const users = require('./routers/user')

const port = 5000;

app.use(express.static('./public'))

app.use(express.json())

app.use('/api/v1/users', users)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is on ...`))
    } catch (error) {
        console.log(error);
    }
}

start()