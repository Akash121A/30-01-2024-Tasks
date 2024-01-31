const mongoose = require('mongoose');

// Train Schema
const trainSchema = new mongoose.Schema({
    train_id: { type: Number, require: true},
    train_name: { type: String, required: true },
    source_station: { type: String, required: true },
    destination_station: { type: String, required: true },
    departure_time: { type: Date, required: true },
    arrival_time: { type: Date, required: true },
    fare: { type: Number, required: true },
    available_seats: { type: Number, required: true },
    coach_information: [{
        coach_type: String,
        seats_available: Number,
        fare_per_seat: Number,
    }],

    active: { type: Boolean, default: true }

});

const Train = mongoose.model('Train', trainSchema);
module.exports = { Train };