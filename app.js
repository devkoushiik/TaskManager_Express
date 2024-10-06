const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
const connectDB = require('./DB/connection')
require('dotenv').config();

// middlewares
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// router middleware
app.use('/api/v1/tasks',tasks)

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log('Server is on 3000'))
    } catch (error) {
       console.log(error)
    }
}

start()

// app.use(/api/v1/tasks)
// router.route('/').get().post()
// router.route('/:id').get().post().patch().delete()

