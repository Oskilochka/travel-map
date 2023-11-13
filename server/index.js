const express = require("express")
const mongoose = require("mongoose").default
const dotenv = require("dotenv")

const markerRoute = require('./routes/marker')
const userRoute = require('./routes/user')

const app = express();

dotenv.config()

app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongo DB"))
    .catch(e => console.error(e))

app.use("/api/v1/markers", markerRoute)
app.use("/api/v1/users", userRoute)

app.listen(8080, () => console.log("Server 8080"))


