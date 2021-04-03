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

const createPost = async (req, res) => {
    // req.body allows us to access data in string or JSON object from client
    const post = req.body;
    const newPost = new postPost(post);
    
    try {

         await newPost.save();
         res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}

module.exports = { getPosts, createPost };