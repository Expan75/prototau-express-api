const express = require('express');
const router = express.Router();
const TrackDataPoint = require('../models/trackdatapoint');
const mongoose = require('mongoose');

// Get List
router.get('/trackdata', (req, res, next) => {

    // Gets params to construct datetime range if it exists (should be UNIX timestamps or JS date objects)
    const startDatetime = req.query.startDatetime || null;
    const endDatetime = req.query.endDatetime || null;

    // turn em into ISOstrings
    const datetimeRange = [startDatetime, endDatetime].map(datetime => new Date(datetime));
    const [startTime, endTime] = datetimeRange;

    // construct query object 
    let query = {};

    // TODO: cast values into eligbles for mongoDB (i.e. ISO dates) while handling multiple input
    // constructs query with range params if they are not null
    if ((!(startDatetime === null)) || (!(endDatetime === null))) {
        query.created_at = {};

        // fill in prop value with new filter objects
        if (!(startDatetime === null)) {
            query.created_at.$gte = startTime.toISOString();
        }
        // similar
        if (!(endDatetime === null)) {
            query.created_at.$lte = endTime.toISOString();
        }
    }

    console.log("logging constructed query: ", query);

    // Sets result limit using given query param if present (defaults to 100)
    const maxResults = req.query.maxResults || 100;

    TrackDataPoint.find(query).limit(maxResults)
        .then(data => res.json(data))
        .catch(e => console.log(e));
});


// $gte: startTime.getTime(),
//     $lte: endTime.getTime()


// Post
router.post('/trackdata', (req, res, next) => {
    TrackDataPoint.create(req.body)
        .then(data => res.json(data))
        .catch(e => console.log(e));
});

// Get detail 
router.get('/trackdata/:id', (req, res, next) => {
    TrackDataPoint.findById({
            "_id": mongoose.Types.ObjectId(req.params.id)
        })
        .then(data => res.json(data))
        .catch(e => console.log(e));
});

// // Update detail
// router.put('/projects/:id', (req, res, next) => {
//     res.send('Project was updated.')
// });

// delete speficic project
router.delete('/trackdata/:id', (req, res, next) => {
    TrackDataPoint.findByIdAndDelete({
            "_id": mongoose.Types.ObjectId(req.params.id)
        })
        .then(data => res.json(data))
        .catch(e => console.log(e));
});

module.exports = router;