const mongoose = require("mongoose").default

const UserModel = new mongoose.Schema({
    email: {
        require: true,
        type: String,
        min: 5,
        max: 50,
        unique: true
    },
    password: {
        require: true,
        type: String,
        min: 8,
        max: 45,
    },
    username: {
        require: true,
        type: String,
        min: 5,
        max: 35,
        unique: true
    },
}, {
    timestamps: true // for createdAt
})

module.exports = mongoose.model("User", UserModel)
