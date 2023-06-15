const express = require("express");

const { BlogModel } = require("../model/Blog.model")


const blogRouter = express.Router();

blogRouter.get("/", async (req, res) => {
    const { Username, Avatar } = req.body
    try {
        const blogs = await BlogModel.find({ Username })
        res.status(200).send(blogs)
    } catch (error) {
        res.status(400).send({ "err": error.message })
    }
})

blogRouter.post("/", async (req, res) => {
    const { Username, Avatar, Title, Content, Category, Date, Likes, Comments } = req.body
    try {
        const blog = new BlogModel({ Username, Avatar, Title, Content, Category, Date, Likes, Comments })
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