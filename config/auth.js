module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if(req.isAuthenticated()) {
            console.log("User is authenticated:", req.user);
            return next();
        }
        res.redirect('/login');
    }
};