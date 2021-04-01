// importing our model to use with controllers
const postPost = require('../models/postPost.js');

const getPosts = async (req, res) => {
    // res.send('This is working too!');
    try {
        // retrieving all the posts we have in database
        const postPosts = await postPost.find();
        res.status(200).json(postPosts)

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const createPost = (req, res) => {
    res.send('Post Creation step!')
}

module.exports = { getPosts, createPost };