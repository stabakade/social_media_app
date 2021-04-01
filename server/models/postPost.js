const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    // we don't just want Number with the like count
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// we input model and schema in it
const postPost = mongoose.model('postPost', postSchema);

module.exports = postPost;