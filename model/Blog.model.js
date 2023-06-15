const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    Username: { type: String, required: true },
    Email: { type: String, required: true },
    Title: { type: String, required: true },
    Content: { type: String, required: true },
    Category: { type: String, required: true },
    Date: { type: String, required: true },
    Likes: { type: Number, required: true },
    Comments: { type: Array, required: true },
}, {
    versionKey: false,
})

const BlogModel = mongoose.model('blog', blogSchema)

module.exports = {
    BlogModel
}