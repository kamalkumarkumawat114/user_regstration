const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobile: {
        type: String,
        validate: {
            validator: v => /^\d{10}$/.test(v),
            message: 'Mobile number must be 10 digits!'
        },
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: v => /^\S+@\S+\.\S+$/.test(v),
            message: 'Email must be valid!'
        }
    },
    address: String,
    street: String,
    city: String,
    state: String,
    country: String,
    loginId: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: v => /^[a-zA-Z0-9]{8}$/.test(v),
            message: 'Login ID must be 8 characters alphanumeric!'
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: v => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(v),
            message: 'Password must be at least 6 characters, with at least one uppercase, one lowercase, and one digit!'
        }
    },
    creationTime: { type: Date, default: Date.now },
    lastUpdatedOn: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
