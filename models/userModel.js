const mongoose = require('mongoose')
const validator = require('validator')

// name, email, photo, password, passwordConfimed

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: [validator.isEmail, 'Please provide a valid email']
    },
    photo: String,
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User;