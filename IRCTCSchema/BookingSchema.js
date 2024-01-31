const mongoose = require('mongoose');

// Booking Schema
const bookingSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    train_id: { type: Number, required: true },
    booking_date: { type: Date, default: Date.now },
    status: { type: String, enum: ['confirmed', 'pending', 'cancelled'], default: 'pending' },
    total_fare: { type: Number, required: true },
    payment_status: { type: String, enum: ['paid', 'unpaid'], default: 'unpaid' },
    passenger_details: [{
        name: { type: String, required: true },
        age: { type: Number, required: true },
        seat_number: { type: String, required: true }
    }],
    booking_payment_type: { type: String },
    from_station: { type: String },
    To_station: { type: String},
    coach_type: { type: String, enum: ['Ac', 'Non Ac']},
    active: { type: Boolean, default: true}
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = { Booking };