const router = require("express").Router();

const Marker = require("../models/Marker")

router.post("/", async (req, res) => {
    const marker = new Marker(req.body)
    try {
        const saved = await marker.save();
        debugger
        res.status(200).json(saved)
    } catch (e) {
        debugger
        res.status(500).json(e)
    }
})

module.exports = router;
