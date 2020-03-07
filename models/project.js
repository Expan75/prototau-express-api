const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const ProjectSchema = new Schema({
    title: String,
    authors: {
        type: [String],
        default: ['Erik Hakansson']
    },
    body: String,
    date: {
        type: Date,
        default: Date.now
    },
    hidden: {
        default: false
    },
    category: {
        default: 'Data Science'
    },
    tags: {
        required: false
    },
    github_link: {
        type: String,
        required: false
    },
});


//create model for Project
const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;