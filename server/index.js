const express = require("express")
const mongoose = require("mongoose").default

const app = express();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
    .then(() => console.log("Mongo DB"))

app.listen(8080, () => console.log("Server 8080"))
