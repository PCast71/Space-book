const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const db = require('./models');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Sessions
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));

// Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Routes
app.use(routes);

// Syncing database and starting server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});