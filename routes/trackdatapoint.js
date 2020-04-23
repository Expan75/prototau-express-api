const express = require('express');
const router = express.Router();
const TrackDataPoint = require('../models/trackdatapoint');
const mongoose = require('mongoose');

// Get List
router.get('/trackdata', (req, res, next) => {

    // Gets params to construct datetime range if it exists (should be UNIX timestamps or JS date objects)
    const startDatetime = req.query.startDatetime || null;
    const endDatetime = req.query.endDatetime || null;

    // transform datetime strings into Date objects 
    const dateRange = [startDatetime, endDatetime].map(datetime => new Date(datetime));
    const [startDate, endDate] = dateRange;

    // construct query object 
    let query = {};

    // add range params if they are not null
    if ((startDatetime !== null) || (endDatetime !== null)) {
        query.created_at = {};

        // fill in prop value with new filters if appropriate
        if (startDatetime !== null) {
            query.created_at.$gte = startDate;
        }
        if (endDatetime !== null) {
            query.created_at.$lte = endDate;
        }
    }

    // Sets result limit and asc/desc options
    const maxResults = req.query.maxResults || 100;
    const sortOrder = req.query.sortOrder || 1; // defaults to asc

    // Send query and handle callback
    TrackDataPoint.find(query).sort({
            created_at: sortOrder
        }).limit(maxResults)
        .then(data => res.json(data))
        .catch(e => console.log(e));
});


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