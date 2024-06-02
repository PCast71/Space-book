const express = require('express');
const router = express.Router();

router.use('/', require('./auth'));
router.use('/posts', require('./post'));

module.exports = router;