const express = require('express');
const { connection } = require("./db");
const cors = require('cors');
const { auth } = require('./middleware/auth.middleware');
const { userRouter } = require('./routes/User.routes');
const { blogRouter } = require('./routes/Blog.routes');
const app = express();
require("dotenv").config()


app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send("BASIC API ENDPOINT")
})

app.use("/", userRouter)

app.use(auth)

app.use("/blogs", blogRouter)



app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Connected to the DB server")

    } catch (error) {
        console.log(error)
        console.log("Cann't connected to the DB server")
    }

    console.log(`Server is running at port ${process.env.port}`)
})