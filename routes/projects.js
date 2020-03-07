const express = require('express');
const router = express.Router();

// MONGO URI: 'mongodb+srv://erik:<password>@project-sandbox-tl1lh.gcp.mongodb.net/test?retryWrites=true&w=majority'


// List view
router.get('/projects', (req, res, next) => {
    res.send('Here are the projects:')
});

// Detail view 
router.get('/projects/:id', (req, res, next) => {
    res.send('This is Project detail')
});

// Update detail
router.put('/projects/:id', (req, res, next) => {
    res.send('Project was updated.')
});

// Post
router.post('/projects', (req, res, next) => {
    res.send('Project was created.')
});

// delete speficic project
router.delete('/projects/:id', (req, res, next) => {
    res.send('Project was deleted.')
});


module.exports = router;