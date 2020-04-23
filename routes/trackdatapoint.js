const express = require('express');
const router = express.Router();
const TrackDataPoint = require('../models/trackdatapoint');
const mongoose = require('mongoose');

// Get List
router.get('/trackdata', (req, res, next) => {

    console.log('logging query params: ', req.query);

    // Gets params to construct datetime range if it exists (should be UNIX timestamps)
    const startDatetime = req.query.startDatetime || null;
    const endDatetime = req.query.endDatetime || null;

    // Sets result limit using given query param if present (defaults to 100)
    const maxResults = req.query.maxResults || 100;

    // construct query object 
    let query = {};

    // constructs query with range params if they are not null
    if ((!(startDatetime === null)) || (!(startDatetime === null))) {
        query.created_at = {};

        // fill in prop value with new filter objects
        if (!(startDatetime === null)) {

            query.created_at.$gte = startDatetime;
        }
        // similar
        if (!(endDatetime === null)) {
            query.created_at.$lte = endDatetime;
        }
    }

    console.log("logging constructed query: ", query);

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