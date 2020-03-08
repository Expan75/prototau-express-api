const express = require('express');
const router = express.Router();
const TrackDataPoint = require('../models/trackdatapoint');
const mongoose = require('mongoose');

// List view // only gets the first 25 results
router.get('/trackdata', (req, res, next) => {
    TrackDataPoint.find({})
        .then(data => res.json(data.slice(0, 25)))
        .catch(e => console.log(e));
});

// Detail view 
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

// Post
router.post('/trackdata', (req, res, next) => {

    TrackDataPoint.create(req.body)
        .then(data => res.json(data))
        .catch(e => console.log(e));
});

// delete speficic project
router.delete('/trackdata/:id', (req, res, next) => {
    TrackDataPoint.findByIdAndDelete({
            "_id": mongoose.Types.ObjectId(req.params.id)
        })
        .then(data => res.json(data))
        .catch(e => console.log(e));
});

module.exports = router;