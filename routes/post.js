const express = require('express');
const { ensureAuthenticated } = require('../config/auth');
const db = require('../models');
const router = express.Router();

// Display dashboard with user's posts
router.get('/dashboard', ensureAuthenticated, async (req, res) => {
  try {
    const posts = await db.Post.findAll({ where: { UserId: req.user.id } });
    console.log('Posts:', posts); // Debug log for posts
    res.render('dashboard', { posts, title: 'Dashboard' });
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});

// Create a new post
router.post('/create', ensureAuthenticated, async (req, res) => {
  try {
    const { title, content } = req.body;
    await db.Post.create({ title, content, UserId: req.user.id });
    res.redirect('/posts/dashboard');
  } catch (err) {
    console.error(err);
    res.redirect('/posts/dashboard');
  }
});

// Delete a post
router.post('/:id/delete', ensureAuthenticated, async (req, res) => {
  try {
    await db.Post.destroy({ where: { id: req.params.id } });
    res.redirect('/posts/dashboard');
  } catch (err) {
    console.error(err);
    res.redirect('/posts/dashboard');
  }
});

// Update a post
router.post('/:id/update', ensureAuthenticated, async (req, res) => {
  try {
    const { title, content } = req.body;
    await db.Post.update({ title, content }, { where: { id: req.params.id } });
    res.redirect('/posts/dashboard');
  } catch (err) {
    console.error(err);
    res.redirect('/posts/dashboard');
  }
});

// Display post
router.get('/:id', async (req, res) => {
  try {
    const post = await db.Post.findOne({
      where: { id: req.params.id },
      include: [
        db.User,
        {
          model: db.Comment,
          include: [db.User]
        }
      ],
    });
    res.render('post', { post });
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});

// Add a comment
router.post('/:id/comment', ensureAuthenticated, async (req, res) => {
  try {
    const { comment } = req.body;
    await db.Comment.create({ content: comment, PostId: req.params.id, UserId: req.user.id });
    res.redirect(`/posts/${req.params.id}`);
  } catch (err) {
    console.error(err);
    res.redirect(`/posts/${req.params.id}`);
  }
});

module.exports = router;