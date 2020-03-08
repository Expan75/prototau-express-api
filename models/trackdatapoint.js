const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema for todo
const trackDataPointSchema = new Schema({

    // key identifiers (note MongoDB adds PK of _id automatically)
    ms_timestamp: Number,

    // main sensor inputs
    current: Number,
    temperature: Number,
    voltage: Number,
    pressure: Number,
    state: String,
    alarm: String,

    // add additonal sensor input below
    // e.g.: 
    // sensor1: Type,

    // // meta data
    // meta: {
    //     created_at: {
    //         type: Date,
    //         default: Date.now
    //     },
    //     updated_at: {
    //         type: Date,
    //         default: Date.now
    //     }
    // }
});


//create model for Project
const TrackDataPoint = mongoose.model('trackdatapoint', trackDataPointSchema);

module.exports = TrackDataPoint;