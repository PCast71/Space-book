const express = require('express');
const passport = require('passport');
const db = require('../models');
const router = express.Router();

//Login handling
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
}));

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', async (req, res) => {
    const {username, password } = req.body;
    try {
        await db.User.create({ username, password});
        res.redirect('/login');
    } catch (err) {
        res.redirect('/signup');
    }
});

// Logging out
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;