const express = require('express');
const { ensureAuthenticated } = require('../config/auth');
const db - require('../models');
const router = express.Router();

// Homepage
router.get('/', async (req, res) => {
    const posts = await db.Post.findAll({ include: db.User });
    res.render('home', { posts });
});

//Gets dashboard
router.get('/dashboard', ensureAuthenticated, async(req,res) => {
    const post = await db.Post.findAll({ where: { UserId: req.user.id } });
    res.render('dashboard', { posts });
});

//Post creation
router.post('/create', ensureAuthenticated, async (req, res) => {
    const { title, content } = req.body;
    await db.Post.create({ title, content, UserId: req.user.id });
    res.redirect('/posts/dashboard');
});

//display post
router.get('/:id', async (req, res) => {
    const post = await db.Post.findOne({
         where: { id: req.params.id },
          include: [
            db.User,
            {
                model: db.Commnet,
                include: [db.User]
            }
          ],
});
res.render('post', { post });
});

//Comments
router.post('/:id/comment', ensureAuthenticated, async (req, res) => {
    const { comment } = req.body;
    await db.Comment.create({ content: comment, PostId: req.params.id, UserId: req.user.id });
    res.redirect(`/posts/${req.params.id}`);
});

//Post Updating
router.post('/:id/update', ensureAuthenticated, async (req, res) => {
    const { title, content } = req.body;
    await db.Post.update({ title, content }, { where: { id: req.params.id } });
    res.redirect('/posts/dashboard');
});

//Post deletion
router.post('/:id/delete', ensureAuthenticated, async (req, res) => {
    await db.Post.destroy({ where: { id: req.params.id } });
    res.redirect('/posts/dashboard');
});

module.exports = router;