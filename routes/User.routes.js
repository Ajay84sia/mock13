const express = require("express");

const { UserModel } = require("../model/User.model")

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const userRouter = express.Router();


userRouter.post("/register", async (req, res) => {
    const { Username, Avatar, Email, Password } = req.body;
    try {
        bcrypt.hash(Password, 5, async (err, hash) => {
            const user = new UserModel({ Email, Username, Avatar, Password: hash });
            await user.save();
            res.status(200).send({
                "msg": "New user has been registered"
            })
        })
    } catch (error) {
        res.status(400).send({ "err": error.message })
    }
})

userRouter.post("/login", async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const user = await UserModel.findOne({ Email })
        if (user) {
            bcrypt.compare(Password, user.Password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ Username: user.Username, Email: user.Email }, "mock13")
                    res.status(200).send({ "msg": "Login successful", token })
                } else {
                    res.status(200).send({ "msg": "Wrong Credentials" })
                }
            })
        } else {
            res.status(200).send({ "msg": "Wrong Credentials" })
        }
    } catch (error) {
        res.status(400).send({ "err": error.message })
    }
})


module.exports = {
    userRouter
}