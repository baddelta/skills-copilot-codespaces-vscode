// Create web server
// import express
const express = require('express');
// create server
const app = express();
// import body-parser
const bodyParser = require('body-parser');
// import mongoose
const mongoose = require('mongoose');
// import Comment
const Comment = require('./models/comment');
// connect to mongoose
mongoose.connect('mongodb://localhost/comments');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get all comments
app.get('/comments', (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(comments);
        }
    });
});

// get a comment
app.get('/comments/:id', (req, res) => {
    Comment.findById(req.params.id, (err, comment) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(comment);
        }
    });
});

// post a comment
app.post('/comments', (req, res) => {
    let comment = new Comment(req.body);
    comment.save((err, comment) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(comment);
        }
    });
});

// update a comment
app.put('/comments/:id', (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, (err, comment) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(comment);
        }
    });
});

// delete a comment
app.delete('/comments/:id', (req, res) => {
    Comment.findByIdAndRemove(req.params.id, (err, comment) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(204).send('Comment removed');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Path: comment.js
// import mongoose
const mongoose = require('mongoose');
// create schema
const Schema = mongoose.Schema;
// create comment schema
const CommentSchema = new Schema({});