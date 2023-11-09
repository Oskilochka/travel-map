const mongoose = require("mongoose").default

const MarkerModel = new mongoose.Schema({
    title: {
        require: true,
        type: String,
        min: 5,
    },
    description: {
        require: true,
        type: String,
        min: 5,
    },
    username: {
        require: true,
        type: String,
    },
    rate: {
        require: true,
        type: Number,
        min: 0,
        max: 5
    },
    lat: {
        require: true,
        type: Number,
    },
    lon: {
        require: true,
        type: Number,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Marker", MarkerModel)
