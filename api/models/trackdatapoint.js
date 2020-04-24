const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema for todo
const trackDataPointSchema = new Schema({

    // key identifiers (note MongoDB adds PK of _id automatically)
    ms_timestamp: Number,

    // datetimes
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },

    // main sensor inputs
    current: Number,
    temperature: Number,
    voltage: Number,
    pressure: Number,
    state: String,
    alarm: String
});


//create model for Project
const TrackDataPoint = mongoose.model('trackdatapoint', trackDataPointSchema);

module.exports = TrackDataPoint;