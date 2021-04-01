const express = require('express');

// import { getPosts } from '../controllers/posts.js' 

// did not like this practice
// const getPosts = require('../controllers/posts.js');
// const createPost = require('../controllers/posts.js');


const controllersFunctions = require('../controllers/posts.js');

const router = express.Router();

router.get('/', controllersFunctions.getPosts);
// router.post('/', createPost);

module.exports = router;
// commenting this since this is ES6 functionality and we are not using it
// export default router;