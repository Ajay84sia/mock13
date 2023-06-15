const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Username: { type: 'string', required: true },
    Avatar: { type: 'string', required: true },
    Email: { type: 'string', required: true },
    Password: { type: 'string', required: true },
}, {
    versionKey: false,
})

const UserModel = mongoose.model('user', userSchema)

module.exports = {
    UserModel
}