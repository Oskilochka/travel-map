const router = require("express").Router();
const bcrypt = require("bcrypt")
const User = require("../models/User")

router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            email: req.body.username,
            username: req.body.username,
            password: hashPass,
        })

        const savedUser = await user.save();
        res.status(200).json(savedUser._id)
    } catch (e) {
        res.status(500).json(e)
    }
})

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});

        if (!user) {
            res.status(400).json("Username or password is incorrect")
        }

        const valPass = await bcrypt.compare(req.body.password, user.password);

        if (!valPass) {
            res.status(400).json("Username or password is incorrect")
        }

        res.status(200).json({_id: user._id, username: user.username})
    } catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router;
