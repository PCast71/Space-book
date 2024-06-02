const express = require('express');
const router = express.Router();

// adding route for root URL
router.get('/', (req, res) => {
    res.render('home');
})

router.use('/', require('./auth'));
router.use('/posts', require('./post'));

module.exports = router;