// 4. Define object model irctc ticket booking Schema

const mongoose = require('mongoose');

//User Schema
const userSchema = new mongoose.Schema({
    id: { type: Number },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone_number: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    last_login: { type: Date },
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zip_code: String
    },
    age: { type: Number},
    gender: { type: String, enum: ['Male', 'Female', 'Prefer Not to Say'] },
    payment_details: {
        card_number: String,
        expiration_date: String,
        cvv: String
    },
    active: { type: Boolean, default: true}
});
const User = mongoose.model('User', userSchema);

module.exports = { User };
