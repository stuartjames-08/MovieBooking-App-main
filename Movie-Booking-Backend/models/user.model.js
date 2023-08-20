const mongoose = require('mongoose')
const validator = require('validator');

const userSchema = new mongoose.Schema({
    email_address: {
        type: String,
        required: [true, 'Email is Required'],
        unique: true, // to check if the given mail id already exists in database or not
        validate: [validator.isEmail, 'Please Enter valid email']
    },
    first_name: {
        type: String,
        required: [true, 'First Name is Required'],
    },
    last_name: {
        type: String,
    },
    contact: {
        type: String,
      
    },
    password: {
        type: String,
        required: [true, 'Password is Required'],
        minlength: [8, 'Password should be grater than 8 charcters']
    },
    role: {
        type: String,
        default: "user"
    },
    // isLoggedIn: {
    //     type: Boolean,
    //     required: true
    // },
    uuid: {
        type: String
    },
    accesstoken: {
        type: String
    },
    coupens: {
        type: Array
    },
    bookingRequests: {
        type : Array
    }
});

module.exports = mongoose.model('User', userSchema);