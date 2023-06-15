const express = require("express");

const { BlogModel } = require("../model/Blog.model")


const blogRouter = express.Router();

blogRouter.post("/add", async (req, res) => {
    const { Username, Title, Content, Category, Date, Likes, Comments } = req.body
    try {
        const blog = new BlogModel({ Username, Title, Content, Category, Date, Likes, Comments })
        await blog.save();
        res.status(200).send({
            "msg": "New Blog has been added successfully"
        })
    } catch (error) {
        res.status(400).send({ "err": error.message })
    }
})

module.exports = {
    blogRouter
}