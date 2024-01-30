// 4. Define object model irctc ticket booking Schema

const mongoose = require('mongoose');

//User Schema
const userSchema = new mongoose.Schema({
    id: { type: String},
    name: { type: String, required: true },
    email: { type: String },
    password: { type: String },
    phone: { type: String },
    address: { type: String},
    age: { type: Number },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other', 'Prefer not to say']
    },
    active: { type: Boolean, default: true },
    createdAt: { type: Date.now },
    updatedAt: { type: Date.now }
});

// Train Schema
const trainSchema = new mongoose.Schema({
    trainId: { type: Number},
    trainName: { type: String },
    source: { type: String },
    destination: { type: String },
    departureTime: { type: Date },
    arrivalTime: { type: Date },
    fare: { type: Number },
    availableSeats: { type: Number },
    active: { type: Boolean, default: true },
    createdAt: { type: Date.now },
    updatedAt: { type: Date.now }
});

// Ticket Schema
const ticketSchema = new mongoose.Schema({
    ticketId: { type: String },
    userName: { type: String },
    trainNumber: { type: Number },
    trainName: { type: String},
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other', 'Prefer not to say']
    },
    bookingDate: { type: Date },
    travelDate: { type: Date},
    arrivingTime: { type: Date },
    departureTime: { type: Date},
    source: { type: String },
    destination: { type: String },
    status: { type: Boolean },
    seatNumber: { type: Number },
    active: { type: Boolean, default: true },
    createdAt: { type: Date.now },
    updatedAt: { type: Date.now }
}
);

module.exports = { userSchema, trainSchema, ticketSchema };
