const express = require("express")
const mongoose = require("mongoose").default
const dotenv = require("dotenv")

dotenv.config()

const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Mongo DB"))
    .catch(e => console.error(e))

app.listen(8080, () => console.log("Server 8080"))


