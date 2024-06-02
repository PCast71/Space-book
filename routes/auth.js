const express = require('express');
const passport = require('passport');
const db = require('../models');
const router = express.Router();

// Login handling
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/posts/dashboard',  // Redirect to dashboard after login
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await db.User.findOne({ where: { username } });
        if (existingUser) {
            req.flash('error', 'Username already exists');
            return res.redirect('/signup');
        }
        await db.User.create({ username, password });
        res.redirect('/login');
    } catch (err) {
        console.error(err);
        req.flash('error', 'An error occurred during signup');
        res.redirect('/signup');
    }
});

// Logging out
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
});

module.exports = router;