const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Working')
});

module.exports = router;
// commenting this since this is ES6 functionality and we are not using it
// export default router;